import { sequelizeDB } from "../db/db-connection";
import { QueryTypes } from "sequelize";
import { BlogsInstance } from '../model/blogs.model.';
import { PartnerusInstance } from "../model/PartnerUs.model";
import { sendMail } from "../utils/sendMail";
import { consentone_body } from "../template/consentone";
import { consenttwo_body } from "../template/consenttwo";
import { config } from "../config/config";
import { uploadimage } from "../utils/imageupload";
import { OrderextenseInstance } from "../model/orderextense.model";
import moment from "moment";
import { OrderInstance } from "../model/order.model";
import { UserInstance } from "../model/user.model";
import { EmailInstance } from "../model/emaillog.model";
import { ContactusInstance } from "../model/contactus";




class AdminServiceClass {
    AllGetOrder = async () => {
        const result = await sequelizeDB.query(
            `SELECT *  FROM tbl_order LEFT JOIN tbl_ordeextense on tbl_ordeextense.ORDER_ID = tbl_order.ORDER_ID 
          `,
            {
                nest: true,
                type: QueryTypes.SELECT,
            }
        )
        return result;
    }

    GetAllUser = async () => {
        const result = await sequelizeDB.query(
            'SELECT `ID`, `USERROLE`, `USERNAME`, `F_NAME`, `L_NAME`, `EMAIL`, `createdAt` FROM `tbl_user` WHERE 1',
            {
                nest: true,
                type: QueryTypes.SELECT,
            }
        )
        return result;
    }

    get_contactus = async () => {
        const result = await sequelizeDB.query(
            'SELECT  `CONTACTUS_ID`,`FULLNAME`, `EMAIL`, `SUBJECT`, `TRACKINGID`, `MESSAGE`, `createdAt` FROM `tbl_contactus`',
            {
                nest: true,
                type: QueryTypes.SELECT,
            }
        )
        return result;
    }

    get_partnerus = async () => {
        const result = await PartnerusInstance.findAll();
        return result;
    }

    Process_log = async (req: any) => {
        const result = await sequelizeDB.query(
            `SELECT tbl_processlog.* FROM tbl_processlog LEFT JOIN tbl_ordeextense ON tbl_ordeextense.ORDER_ID = tbl_processlog.ORDER_ID WHERE tbl_ordeextense.NORMAL_ID = '${req.body.ORDER_ID}' OR tbl_ordeextense.SPECIAL_ID = '${req.body.ORDER_ID}'`,
            {
                nest: true,
                type: QueryTypes.SELECT,
            }
        )
        return result;
    }

    awaiting_consent = async () => {
        const result = await sequelizeDB.query(
            `SELECT * FROM tbl_ordeextense LEFT JOIN tbl_order ON tbl_order.ORDER_ID = tbl_ordeextense.ORDER_ID where tbl_ordeextense.DOCUMENT_STATUS = ${false} AND tbl_ordeextense.createdAt < (now() - INTERVAL 72 HOUR);`,
            {
                nest: true,
                type: QueryTypes.SELECT,
            }
        )
        return result;
    }


    consentAwait_mail = async (req: any) => {

        if (req.ORDER_TYPE === 1 || req.ORDER_TYPE === 2 || req.ORDER_TYPE === 3 || req.ORDER_TYPE === 4) {
            const nodemail = await sendMail(req.EMAIL, "GCMSBuddy - Awaiting consent of Your GCMS Notes Order", "", consentone_body(`${req.F_NAME} ${req.L_NAME}`, `${config.backendurl}consent/CBSA_Consent_Form_New.pdf`, `${config.backendurl}consent/CBSA_Sample_Consent.jpg`, `${config.frontendurl}/consent-uploader?orderID=${req.NORMAL_ID}`));
            return nodemail;
        }
        if (req.ORDER_TYPE === 5) {
            const nodemail = await sendMail(req.EMAIL, "GCMSBuddy - Awaiting consent of Your GCMS Notes Order", "", consenttwo_body(`${req.F_NAME} ${req.L_NAME}`, `${config.backendurl}consent/GCMS_Consent_Form.pdf`, `${config.backendurl}consent/GCMS_Sample_Consent.jpg`, `${config.frontendurl}/consent-uploader?orderID=${req.NORMAL_ID}`));
            return nodemail;
        }
    }


    create_blog = async (body: any, files: any) => {
        let images: any = null
        if (files.IMAGE) {
            images = uploadimage(files.IMAGE);
        }
        const result = await BlogsInstance.create({
            IMAGE: images,
            HEADING: body.HEADING,
            CONTENT: body.CONTENT,
            LIKE: 0,
            ADDED_BY: 1,
        })

        return result;
    }

    my_create_blog = async (header: any) => {
        const result = await BlogsInstance.findAll({
            where: {
                ADDED_BY: header.sub
            }
        })

        return result;
    }

    delete_contact = async (CONTACTUS_ID: any) => {
        const result = await ContactusInstance.destroy({
            where: {
                CONTACTUS_ID: CONTACTUS_ID
            }
        })

        return result;
    }


    get_registerUser = async () => {
        const result = await sequelizeDB.query(
            'SELECT  `ID` as id,`USERROLE`, `USERNAME`, `F_NAME`, `L_NAME`, `EMAIL`,  `ISDELETED`, `createdAt`, `updatedAt` FROM `tbl_user`',
            {
                nest: true,
                type: QueryTypes.SELECT,
            }
        )
        return result;
    }

    get_blogs = async () => {
        const result = await BlogsInstance.findAll();
        return result;
    }

    delete_my_create_blog = async (header: any) => {
        const result = await BlogsInstance.destroy({
            where: {
                BLOG_ID: parseInt(header.BLOG_ID)
            }
        });
        return result;
    }


    notes_applied = (req: any, header: any) => {
        const dateTime: any = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
        const result = OrderextenseInstance.update({
            SPECIAL_ID: req.SPECIAL_ID,
            NOTES_APPLIEDBY: header.sub,
            NOTES_APPLIEDON: new Date()
        }, {
            where: {
                ORDER_ID: req.ORDER_ID,
            }
        })

        return result;
    }

    complete_process = (req: any, header: any) => {
        const result = OrderextenseInstance.update({
            COMPLETED_BY: header.sub,
            COMPLETION_DATE: new Date()
        }, {
            where: {
                ORDER_ID: req.ORDER_ID,
            }
        })

        return result;
    }


    changeStatus = async (status: any, ORDER_ID: any) => {
        const result = await OrderInstance.update({
            STATUS: status,
        }, {
            where: {
                ORDER_ID: ORDER_ID,
            }
        })

        return result;
    }

    recently_applied = async () => {
        const result = await OrderInstance.findAll({
            order: [['createdAt', 'DESC']],
            limit: 6
        })
        return result;
    }

    latest_consent = async () => {
        const result = await OrderextenseInstance.findAll({
            where: {
                DOCUMENT_STATUS: true
            },
            order: [['updatedAt', 'DESC']],
            limit: 6
        })
        return result;
    }

    latest_user = async () => {
        const result = await UserInstance.findAll({
            order: [['createdAt', 'DESC']],
            limit: 6
        })
        return result;
    }


    ExtrasendMails = async (req: any) => {
        const nodemail = await sendMail(req.EMAIL, req.PERPOUS, req.EMAIL_BODY, "");
        return nodemail;

    }

    CreateMail = async (req: any) => {
        const nodemail = await EmailInstance.create({
            ORDER_ID: req.ORDER_ID,
            EMAIL_STATUS: true,
            PERPOUS: req.PERPOUS,
            EMAIL_BODY: req.EMAIL_BODY
        });
        return nodemail;

    }

}




export const AdminService = new AdminServiceClass();
