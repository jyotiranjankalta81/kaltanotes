import { Request, Response } from "express";
import httpStatus from "http-status";
import { mainService } from "../service/main.service";
import { catchAsync } from "../utils/catchAsync";
import { generateAuthTokens } from "../utils/tokens";
import jwt_decode from "jwt-decode";
import { AdminService } from "../service/admin.service";



class AdminControllerClass {

    AllGetOrder = catchAsync(async (req: Request, res: Response) => {
        try {
            const orders = await AdminService.AllGetOrder();
            return res.status(httpStatus.CREATED).send({ success: true, message: "Your Form has subbmitted successfully", data: orders });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    });

    GetAllUser = catchAsync(async (req: Request, res: Response) => {
        try {
            const orders = await AdminService.GetAllUser();
            return res.status(httpStatus.CREATED).send({ success: true, message: "Your Form has subbmitted successfully", data: orders });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    });


    get_contactus = catchAsync(async (req: Request, res: Response) => {
        try {
            const contacts = await AdminService.get_contactus();
            return res.status(httpStatus.CREATED).send({ success: true, message: "Your Form has subbmitted successfully", data: contacts });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );
    get_partnerus = catchAsync(async (req: Request, res: Response) => {
        try {
            const partners = await AdminService.get_partnerus();
            return res.status(httpStatus.CREATED).send({ success: true, message: "Your Form has subbmitted successfully", data: partners });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );



    Extra_requests = catchAsync(async (req: Request, res: Response) => {
        try {
            const ExtrasendMails = await AdminService.ExtrasendMails(req.body);
            if (ExtrasendMails) {
                const storemail = await AdminService.CreateMail(req.body);
                if (storemail) {
                    const changestatus = await AdminService.changeStatus(req.body.STATUS, req.body.ORDER_ID);
                    if (changestatus) {
                        const processlog = await mainService.CreateProcessLog({
                            ORDER_ID: req.body.ORDER_ID,
                            PROCESS_STATUS: true,
                            PERPOUS: req.body.STATUS + "Process request",
                        });
                        if (processlog) {
                            return res.status(httpStatus.CREATED).send({ success: true, message: "Process completed successfully", data: processlog });
                        }
                    }
                }
            }

        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );


    Process_log = catchAsync(async (req: Request, res: Response) => {
        try {
            const partners = await AdminService.Process_log(req);
            return res.status(httpStatus.CREATED).send({ success: true, message: "Your Form has subbmitted successfully", data: partners });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );



    awaiting_consent = catchAsync(async (req: Request, res: Response) => {

        try {
            const consentcheck: Array<any> = await AdminService.awaiting_consent();
            consentcheck.forEach(async (resnew: any) => {
                const sendmail: any = await AdminService.consentAwait_mail(resnew);
                if (sendmail.status) {
                    const processlog = await mainService.CreateProcessLog({
                        ORDER_ID: resnew.ORDER_ID,
                        PROCESS_STATUS: true,
                        PERPOUS: "send mail For Awaiting Consent",
                    });
                }

            });
            return res.status(httpStatus.CREATED).send({ success: true, message: "Your Form has subbmitted successfully", data: [] });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );



    create_blog = catchAsync(async (req: Request, res: Response) => {
        try {
            const blog = await AdminService.create_blog(req.body, req.files);
            return res.status(httpStatus.CREATED).send({ success: true, message: "blog created successsfuly successfully", data: blog });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );


    dashboard_details = catchAsync(async (req: Request, res: Response) => {
        try {
            const RecentlyApplied = await AdminService.recently_applied();
            if (RecentlyApplied) {
                const latest_consent = await AdminService.latest_consent();
                if (latest_consent) {
                    const latest_user = await AdminService.latest_user();
                    if (latest_user) {
                        return res.status(httpStatus.CREATED).send({ success: true, message: "blog created successsfuly successfully", RecentlyApplied: RecentlyApplied, latest_consent: latest_consent, latest_user: latest_user });
                    }
                }
            }
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );

    my_create_blog = catchAsync(async (req: Request, res: Response) => {

        const reqheader: any = req.header("authorization");
        const header: any = jwt_decode(reqheader)
        try {
            const blog = await AdminService.my_create_blog(header);
            return res.status(httpStatus.CREATED).send({ success: true, message: "blog created successsfuly successfully", data: blog });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );




    delete_contact = catchAsync(async (req: Request, res: Response) => {
        try {
            const blog = await AdminService.delete_contact(req.query.CONTACTUS_ID);
            return res.status(httpStatus.CREATED).send({ success: true, message: "Contact deleted successfully", data: blog });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );

    get_registerUser = catchAsync(async (req: Request, res: Response) => {
        try {
            const blog = await AdminService.get_registerUser();
            return res.status(httpStatus.CREATED).send({ success: true, message: "", data: blog });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );

    get_blogs = catchAsync(async (req: Request, res: Response) => {
        try {
            const blog = await AdminService.get_blogs();
            return res.status(httpStatus.CREATED).send({ success: true, message: "blog created successsfuly successfully", data: blog });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );

    delete_my_create_blog = catchAsync(async (req: Request, res: Response) => {
        const header: any = req.query;
        try {
            const blog = await AdminService.delete_my_create_blog(header);
            return res.status(httpStatus.CREATED).send({ success: true, message: "blog deleted successfully", data: blog });
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );


    notes_applied = catchAsync(async (req: Request, res: Response) => {
        const reqheader: any = req.header("authorization");
        const header: any = jwt_decode(reqheader)
        try {
            const notesapplied = await AdminService.notes_applied(req.body, header);
            if (notesapplied) {
                const changestatus = await AdminService.changeStatus(2000, req.body.ORDER_ID);
                if (changestatus) {
                    const processlog = await mainService.CreateProcessLog({
                        ORDER_ID: req.body.ORDER_ID,
                        PROCESS_STATUS: true,
                        PERPOUS: "Notes Applied",
                    });
                    if (processlog) {
                        return res.status(httpStatus.CREATED).send({ success: true, message: "Notes Applied successfully", data: notesapplied });
                    }
                }
            }
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );


    complete_process = catchAsync(async (req: Request, res: Response) => {
        const reqheader: any = req.header("authorization");
        const header: any = jwt_decode(reqheader)
        try {
            const notesapplied = await AdminService.complete_process(req.body, header);
            if (notesapplied) {
                const changestatus = await AdminService.changeStatus(5000, req.body.ORDER_ID);
                if (changestatus) {
                    const processlog = await mainService.CreateProcessLog({
                        ORDER_ID: req.body.ORDER_ID,
                        PROCESS_STATUS: true,
                        PERPOUS: "Process completed",
                    });
                    if (processlog) {
                        return res.status(httpStatus.CREATED).send({ success: true, message: "Process completed successfully", data: notesapplied });
                    }
                }
            }
        } catch (error) {
            return res.status(httpStatus.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
        }
    }
    );








}




export const AdminController = new AdminControllerClass();