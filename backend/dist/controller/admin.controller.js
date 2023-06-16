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
exports.AdminController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const main_service_1 = require("../service/main.service");
const catchAsync_1 = require("../utils/catchAsync");
const jwt_decode_1 = __importDefault(require("jwt-decode"));
const admin_service_1 = require("../service/admin.service");
class AdminControllerClass {
    constructor() {
        this.AllGetOrder = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const orders = yield admin_service_1.AdminService.AllGetOrder();
                return res.status(http_status_1.default.CREATED).send({ success: true, message: "Your Form has subbmitted successfully", data: orders });
            }
            catch (error) {
                return res.status(http_status_1.default.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
            }
        }));
        this.GetAllUser = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const orders = yield admin_service_1.AdminService.GetAllUser();
                return res.status(http_status_1.default.CREATED).send({ success: true, message: "Your Form has subbmitted successfully", data: orders });
            }
            catch (error) {
                return res.status(http_status_1.default.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
            }
        }));
        this.get_contactus = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const contacts = yield admin_service_1.AdminService.get_contactus();
                return res.status(http_status_1.default.CREATED).send({ success: true, message: "Your Form has subbmitted successfully", data: contacts });
            }
            catch (error) {
                return res.status(http_status_1.default.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
            }
        }));
        this.get_partnerus = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const partners = yield admin_service_1.AdminService.get_partnerus();
                return res.status(http_status_1.default.CREATED).send({ success: true, message: "Your Form has subbmitted successfully", data: partners });
            }
            catch (error) {
                return res.status(http_status_1.default.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
            }
        }));
        this.Extra_requests = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const ExtrasendMails = yield admin_service_1.AdminService.ExtrasendMails(req.body);
                if (ExtrasendMails) {
                    const storemail = yield admin_service_1.AdminService.CreateMail(req.body);
                    if (storemail) {
                        const changestatus = yield admin_service_1.AdminService.changeStatus(req.body.STATUS, req.body.ORDER_ID);
                        if (changestatus) {
                            const processlog = yield main_service_1.mainService.CreateProcessLog({
                                ORDER_ID: req.body.ORDER_ID,
                                PROCESS_STATUS: true,
                                PERPOUS: req.body.STATUS + "Process request",
                            });
                            if (processlog) {
                                return res.status(http_status_1.default.CREATED).send({ success: true, message: "Process completed successfully", data: processlog });
                            }
                        }
                    }
                }
            }
            catch (error) {
                return res.status(http_status_1.default.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
            }
        }));
        this.Process_log = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const partners = yield admin_service_1.AdminService.Process_log(req);
                return res.status(http_status_1.default.CREATED).send({ success: true, message: "Your Form has subbmitted successfully", data: partners });
            }
            catch (error) {
                return res.status(http_status_1.default.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
            }
        }));
        this.awaiting_consent = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const consentcheck = yield admin_service_1.AdminService.awaiting_consent();
                consentcheck.forEach((resnew) => __awaiter(this, void 0, void 0, function* () {
                    const sendmail = yield admin_service_1.AdminService.consentAwait_mail(resnew);
                    if (sendmail.status) {
                        const processlog = yield main_service_1.mainService.CreateProcessLog({
                            ORDER_ID: resnew.ORDER_ID,
                            PROCESS_STATUS: true,
                            PERPOUS: "send mail For Awaiting Consent",
                        });
                    }
                }));
                return res.status(http_status_1.default.CREATED).send({ success: true, message: "Your Form has subbmitted successfully", data: [] });
            }
            catch (error) {
                return res.status(http_status_1.default.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
            }
        }));
        this.create_blog = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const blog = yield admin_service_1.AdminService.create_blog(req.body, req.files);
                return res.status(http_status_1.default.CREATED).send({ success: true, message: "blog created successsfuly successfully", data: blog });
            }
            catch (error) {
                return res.status(http_status_1.default.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
            }
        }));
        this.dashboard_details = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const RecentlyApplied = yield admin_service_1.AdminService.recently_applied();
                if (RecentlyApplied) {
                    const latest_consent = yield admin_service_1.AdminService.latest_consent();
                    if (latest_consent) {
                        const latest_user = yield admin_service_1.AdminService.latest_user();
                        if (latest_user) {
                            return res.status(http_status_1.default.CREATED).send({ success: true, message: "blog created successsfuly successfully", RecentlyApplied: RecentlyApplied, latest_consent: latest_consent, latest_user: latest_user });
                        }
                    }
                }
            }
            catch (error) {
                return res.status(http_status_1.default.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
            }
        }));
        this.my_create_blog = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const reqheader = req.header("authorization");
            const header = (0, jwt_decode_1.default)(reqheader);
            try {
                const blog = yield admin_service_1.AdminService.my_create_blog(header);
                return res.status(http_status_1.default.CREATED).send({ success: true, message: "blog created successsfuly successfully", data: blog });
            }
            catch (error) {
                return res.status(http_status_1.default.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
            }
        }));
        this.delete_contact = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const blog = yield admin_service_1.AdminService.delete_contact(req.query.CONTACTUS_ID);
                return res.status(http_status_1.default.CREATED).send({ success: true, message: "Contact deleted successfully", data: blog });
            }
            catch (error) {
                return res.status(http_status_1.default.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
            }
        }));
        this.get_registerUser = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const blog = yield admin_service_1.AdminService.get_registerUser();
                return res.status(http_status_1.default.CREATED).send({ success: true, message: "", data: blog });
            }
            catch (error) {
                return res.status(http_status_1.default.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
            }
        }));
        this.get_blogs = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const blog = yield admin_service_1.AdminService.get_blogs();
                return res.status(http_status_1.default.CREATED).send({ success: true, message: "blog created successsfuly successfully", data: blog });
            }
            catch (error) {
                return res.status(http_status_1.default.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
            }
        }));
        this.delete_my_create_blog = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const header = req.query;
            try {
                const blog = yield admin_service_1.AdminService.delete_my_create_blog(header);
                return res.status(http_status_1.default.CREATED).send({ success: true, message: "blog deleted successfully", data: blog });
            }
            catch (error) {
                return res.status(http_status_1.default.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
            }
        }));
        this.notes_applied = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const reqheader = req.header("authorization");
            const header = (0, jwt_decode_1.default)(reqheader);
            try {
                const notesapplied = yield admin_service_1.AdminService.notes_applied(req.body, header);
                if (notesapplied) {
                    const changestatus = yield admin_service_1.AdminService.changeStatus(2000, req.body.ORDER_ID);
                    if (changestatus) {
                        const processlog = yield main_service_1.mainService.CreateProcessLog({
                            ORDER_ID: req.body.ORDER_ID,
                            PROCESS_STATUS: true,
                            PERPOUS: "Notes Applied",
                        });
                        if (processlog) {
                            return res.status(http_status_1.default.CREATED).send({ success: true, message: "Notes Applied successfully", data: notesapplied });
                        }
                    }
                }
            }
            catch (error) {
                return res.status(http_status_1.default.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
            }
        }));
        this.complete_process = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const reqheader = req.header("authorization");
            const header = (0, jwt_decode_1.default)(reqheader);
            try {
                const notesapplied = yield admin_service_1.AdminService.complete_process(req.body, header);
                if (notesapplied) {
                    const changestatus = yield admin_service_1.AdminService.changeStatus(5000, req.body.ORDER_ID);
                    if (changestatus) {
                        const processlog = yield main_service_1.mainService.CreateProcessLog({
                            ORDER_ID: req.body.ORDER_ID,
                            PROCESS_STATUS: true,
                            PERPOUS: "Process completed",
                        });
                        if (processlog) {
                            return res.status(http_status_1.default.CREATED).send({ success: true, message: "Process completed successfully", data: notesapplied });
                        }
                    }
                }
            }
            catch (error) {
                return res.status(http_status_1.default.BAD_REQUEST).send({ success: false, message: "Somthing went wrong!", data: error });
            }
        }));
    }
}
exports.AdminController = new AdminControllerClass();
//# sourceMappingURL=admin.controller.js.map