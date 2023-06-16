"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainService = void 0;
const contactus_1 = require("../model/contactus");
const order_model_1 = require("../model/order.model");
const randomnumber_1 = require("../utils/randomnumber");
const orderextense_model_1 = require("../model/orderextense.model");
const sendMail_1 = require("../utils/sendMail");
const consentone_1 = require("../template/consentone");
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const config_1 = require("../config/config");
const consenttwo_1 = require("../template/consenttwo");
const imageupload_1 = require("../utils/imageupload");
const processlog_model_1 = require("../model/processlog.model");
const PartnerUs_model_1 = require("../model/PartnerUs.model");
const moment_1 = __importDefault(require("moment"));
const db_connection_1 = require("../db/db-connection");
const sequelize_1 = require("sequelize");
const uploadconsent_1 = require("../template/uploadconsent");
const user_model_1 = require("../model/user.model");
dotenv_1.default.config({ path: path_1.default.join(__dirname, "../../.env") });
class mainServiceClass {
    constructor() {
        this.userDetails = (req) => __awaiter(this, void 0, void 0, function* () {
            const result = yield user_model_1.UserInstance.findOne({
                where: {
                    ID: req.sub,
                },
            });
            return result;
        });
        this.MyProcessOrder = (header, req) => __awaiter(this, void 0, void 0, function* () {
            const result = yield processlog_model_1.ProcessLogModel.findAll({
                where: {
                    ORDER_ID: req.ORDER_ID,
                },
            });
            return result;
        });
        this.UpdatePayment = (header, req) => __awaiter(this, void 0, void 0, function* () {
            const result = yield orderextense_model_1.OrderextenseInstance.update({
                PAYMENT_ID: req.paymentId,
            }, {
                where: {
                    ORDER_ID: req.ORDER_ID,
                },
            });
            return result;
        });
        this.DeleteOrder = (req) => __awaiter(this, void 0, void 0, function* () {
            yield processlog_model_1.ProcessLogModel.destroy({
                where: {
                    ORDER_ID: req.ORDER_ID,
                },
            });
            yield orderextense_model_1.OrderextenseInstance.destroy({
                where: {
                    ORDER_ID: req.ORDER_ID,
                },
            });
            const result = yield order_model_1.OrderInstance.destroy({
                where: {
                    ORDER_ID: req.ORDER_ID,
                },
            });
            return result;
        });
        this.getorderbyid = (header, req) => __awaiter(this, void 0, void 0, function* () {
            const result = yield db_connection_1.sequelizeDB.query(`SELECT *  FROM tbl_order LEFT JOIN tbl_ordeextense on tbl_ordeextense.ORDER_ID = tbl_order.ORDER_ID WHERE tbl_order.ORDER_ID=${req.ORDER_ID}`, {
                nest: true,
                type: sequelize_1.QueryTypes.SELECT,
            });
            return result;
        });
        this.MyGetOrder = (req) => __awaiter(this, void 0, void 0, function* () {
            const result = yield db_connection_1.sequelizeDB.query(`SELECT * ,ORDER_ID AS id FROM tbl_order WHERE APPLIED_BY = '${req.sub}'`, {
                nest: true,
                type: sequelize_1.QueryTypes.SELECT,
            });
            return result;
        });
        this.updateprofile = (header, req) => __awaiter(this, void 0, void 0, function* () {
            const result = yield user_model_1.UserInstance.update({
                USERNAME: req.USERNAME,
                F_NAME: req.F_NAME,
                L_NAME: req.L_NAME,
                DOB: req.DOB,
                VISANO: req.VISANO,
            }, {
                where: {
                    ID: header.sub,
                },
            });
            return result;
        });
        this.create_contactus = (req) => __awaiter(this, void 0, void 0, function* () {
            const result = yield contactus_1.ContactusInstance.create({
                FULLNAME: req.body.FULLNAME,
                EMAIL: req.body.EMAIL,
                SUBJECT: req.body.SUBJECT,
                TRACKINGID: req.body.TRACKINGID,
                MESSAGE: req.body.MESSAGE,
            });
            return result;
        });
        this.check_status = (req) => __awaiter(this, void 0, void 0, function* () {
            const result = yield db_connection_1.sequelizeDB.query(`SELECT tbl_order.STATUS FROM tbl_order LEFT JOIN tbl_ordeextense ON tbl_ordeextense.ORDER_ID  = tbl_order.ORDER_ID WHERE tbl_ordeextense.NORMAL_ID = '${req.body.ORDER_ID}' OR tbl_ordeextense.SPECIAL_ID = '${req.body.ORDER_ID}'`, {
                nest: true,
                type: sequelize_1.QueryTypes.SELECT,
            });
            return result;
        });
        this.create_patner = (req) => __awaiter(this, void 0, void 0, function* () {
            const result = yield PartnerUs_model_1.PartnerusInstance.create({
                FULLNAME: req.body.FULLNAME,
                EMAIL: req.body.EMAIL,
                WHATSAPP: req.body.WHATSAPP,
                MESSAGE: req.body.MESSAGE,
            });
            return result;
        });
        this.CreateProcessLog = (req) => __awaiter(this, void 0, void 0, function* () {
            const result = yield processlog_model_1.ProcessLogModel.create({
                ORDER_ID: req.ORDER_ID,
                PROCESS_STATUS: true,
                PERPOUS: req.PERPOUS,
            });
            return result;
        });
        this.create_order = (req, header) => __awaiter(this, void 0, void 0, function* () {
            const result = yield order_model_1.OrderInstance.create({
                ORDER_TYPE: req.body.ORDER_TYPE,
                F_NAME: req.body.F_NAME,
                L_NAME: req.body.L_NAME,
                DOB: req.body.DOB,
                VISA_APP_NO: req.body.VISA_APP_NO,
                EMAIL: req.body.EMAIL,
                PATNER_TYPE: req.body.PATNER_TYPE,
                SUPPOSE_F_NAME: req.body.SUPPOSE_F_NAME,
                SUPPOSE_L_NAME: req.body.SUPPOSE_L_NAME,
                SUPPOSE_DOB: req.body.SUPPOSE_DOB,
                UCI_NUMBER: req.body.UCI_NUMBER,
                ATIP: req.body.ATIP,
                HEAR_CMT: req.body.HEAR_CMT,
                APPLIED_BY: header.sub,
            });
            return result;
        });
        this.create_order_extense = (req, order1) => __awaiter(this, void 0, void 0, function* () {
            const randomnumber = (0, randomnumber_1.randomgenrator)(7);
            const result = yield orderextense_model_1.OrderextenseInstance.create({
                ORDER_ID: order1.dataValues.ORDER_ID,
                NORMAL_ID: randomnumber,
                SPECIAL_ID: null,
                DOCUMENT_STATUS: false,
                DOCUMENTS: null,
                PAYMENT_TYPE: req.body.PAYMENT_TYPE,
                PAYMENT_ID: req.body.PAYMENT_ID,
                NOTES_APPLIEDON: null,
                NOTES_APPLIEDBY: null,
                COMPLETION_DATE: null,
                COMPLETED_BY: null,
            });
            return result;
        });
        this.send_mail = (req, order) => __awaiter(this, void 0, void 0, function* () {
            if (req.body.ORDER_TYPE === 1 ||
                req.body.ORDER_TYPE === 2 ||
                req.body.ORDER_TYPE === 3 ||
                req.body.ORDER_TYPE === 4) {
                const nodemail = yield (0, sendMail_1.sendMail)(req.body.EMAIL, "GCMSBuddy - Complete Your GCMS Notes Order", "", (0, consentone_1.consentone_body)(`${req.body.F_NAME} ${req.body.L_NAME}`, `${config_1.config.backendurl}consent/CBSA_Consent_Form_New.pdf`, `${config_1.config.backendurl}consent/CBSA_Sample_Consent.jpg`, `${config_1.config.frontendurl}/consent-uploader?orderID=${order === null || order === void 0 ? void 0 : order.NORMAL_ID}`));
                return nodemail;
            }
            else if (req.body.ORDER_TYPE === 5) {
                const nodemail = yield (0, sendMail_1.sendMail)(req.body.EMAIL, "GCMSBuddy - Complete Your CBSA Notes Order", "", (0, consenttwo_1.consenttwo_body)(`${req.body.F_NAME} ${req.body.L_NAME}`, `${config_1.config.backendurl}consent/GCMS_Consent_Form.pdf`, `${config_1.config.backendurl}consent/GCMS_Sample_Consent.jpg`, `${config_1.config.frontendurl}/consent-uploader?orderID=${order === null || order === void 0 ? void 0 : order.NORMAL_ID}`));
                return nodemail;
            }
            else {
                const nodemail = yield (0, sendMail_1.sendMail)(req.body.EMAIL, "GCMSBuddy - Complete Your GCMS Notes Order", "", (0, consentone_1.consentone_body)(`${req.body.F_NAME} ${req.body.L_NAME}`, `${config_1.config.backendurl}consent/CBSA_Consent_Form_New.pdf`, `${config_1.config.backendurl}consent/CBSA_Sample_Consent.jpg`, `${config_1.config.frontendurl}/consent-uploader?orderID=${order === null || order === void 0 ? void 0 : order.NORMAL_ID}`));
                return nodemail;
            }
        });
        this.uploadConstant = (ORDER_ID, files) => __awaiter(this, void 0, void 0, function* () {
            let constantpdf = null;
            if (files.Constantpdf) {
                constantpdf = (0, imageupload_1.uploadimage)(files.Constantpdf);
            }
            const result = yield orderextense_model_1.OrderextenseInstance.update({
                DOCUMENT_STATUS: true,
                DOCUMENTS: constantpdf,
                COMPLETION_DATE: (0, moment_1.default)(new Date())
                    .add(35, "d")
                    .format("YYYY/MM/DD HH:mm:ss"),
            }, {
                where: {
                    NORMAL_ID: ORDER_ID,
                },
            });
            return result;
        });
        this.getOrdereId = (ORDER_ID) => __awaiter(this, void 0, void 0, function* () {
            const result = yield orderextense_model_1.OrderextenseInstance.findOne({
                where: {
                    NORMAL_ID: ORDER_ID,
                },
            });
            return result;
        });
        this.getemailbyorder = (ORDER_ID) => __awaiter(this, void 0, void 0, function* () {
            const result = yield order_model_1.OrderInstance.findOne({
                where: {
                    ORDER_ID: ORDER_ID,
                },
            });
            return result;
        });
        this.UploadConsentEmail = (EMAIL, TRACKING_ID) => __awaiter(this, void 0, void 0, function* () {
            const nodemail = yield (0, sendMail_1.sendMail)(EMAIL, "GCMSBuddy - Consent Uploaded Successfully", "", (0, uploadconsent_1.uploadconsent)(TRACKING_ID));
            return nodemail;
        });
    }
}
exports.mainService = new mainServiceClass();
//# sourceMappingURL=main.service.js.map