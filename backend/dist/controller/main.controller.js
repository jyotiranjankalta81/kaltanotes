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
exports.MainController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const main_service_1 = require("../service/main.service");
const catchAsync_1 = require("../utils/catchAsync");
const jwt_decode_1 = __importDefault(require("jwt-decode"));
const stripe = require("stripe")("sk_test_51L2wFuSIakMfogRlbY0t1gPUKf7bbZyMkEdWELrX98T6LsBPeOV2Y0R4BkEDWBo7v4sCJ98x5aQBjtqPjsCk7FB400v9cTQOMM");
class MainControllerClass {
    constructor() {
        this.userDetails = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const reqheader = req.header("authorization");
                const header = (0, jwt_decode_1.default)(reqheader);
                const insertcollection = yield main_service_1.mainService.userDetails(header);
                return res.status(http_status_1.default.CREATED).send({
                    success: true,
                    message: " Fetched successfully",
                    data: insertcollection,
                });
            }
            catch (error) {
                return res
                    .status(http_status_1.default.BAD_REQUEST)
                    .send({ success: false, message: "Somthing went wrong!", data: error });
            }
        }));
        this.MyGetOrder = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const reqheader = req.header("authorization");
                const header = (0, jwt_decode_1.default)(reqheader);
                const insertcollection = yield main_service_1.mainService.MyGetOrder(header);
                return res.status(http_status_1.default.CREATED).send({
                    success: true,
                    message: " Fetched successfully",
                    data: insertcollection,
                });
            }
            catch (error) {
                return res
                    .status(http_status_1.default.BAD_REQUEST)
                    .send({ success: false, message: "Somthing went wrong!", data: error });
            }
        }));
        this.MyProcessOrder = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const reqheader = req.header("authorization");
                const header = (0, jwt_decode_1.default)(reqheader);
                const insertcollection = yield main_service_1.mainService.MyProcessOrder(header, req.body);
                return res.status(http_status_1.default.CREATED).send({
                    success: true,
                    message: " Fetched successfully",
                    data: insertcollection,
                });
            }
            catch (error) {
                return res
                    .status(http_status_1.default.BAD_REQUEST)
                    .send({ success: false, message: "Somthing went wrong!", data: error });
            }
        }));
        this.UpdatePayment = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const reqheader = req.header("authorization");
                const header = (0, jwt_decode_1.default)(reqheader);
                const insertcollection = yield main_service_1.mainService.UpdatePayment(header, req.body);
                if (insertcollection) {
                    const getorder = yield main_service_1.mainService.getorderbyid(header, req.body);
                    return res.status(http_status_1.default.CREATED).send({
                        success: true,
                        message: " Updated successfully",
                        data: getorder,
                    });
                }
            }
            catch (error) {
                return res
                    .status(http_status_1.default.BAD_REQUEST)
                    .send({ success: false, message: "Somthing went wrong!", data: error });
            }
        }));
        this.deleteOrder = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const insertcollection = yield main_service_1.mainService.DeleteOrder(req.body);
                if (insertcollection) {
                    return res.status(http_status_1.default.CREATED).send({
                        success: true,
                        message: " Deleted successfully",
                        data: insertcollection,
                    });
                }
            }
            catch (error) {
                return res
                    .status(http_status_1.default.BAD_REQUEST)
                    .send({ success: false, message: "Somthing went wrong!", data: error });
            }
        }));
        this.updateprofile = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const reqheader = req.header("authorization");
                const header = (0, jwt_decode_1.default)(reqheader);
                const insertcollection = yield main_service_1.mainService.updateprofile(header, req.body);
                return res.status(http_status_1.default.CREATED).send({
                    success: true,
                    message: " Fetched successfully",
                    data: insertcollection,
                });
            }
            catch (error) {
                return res
                    .status(http_status_1.default.BAD_REQUEST)
                    .send({ success: false, message: "Somthing went wrong!", data: error });
            }
        }));
        this.create_contactus = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const insertcollection = yield main_service_1.mainService.create_contactus(req);
                return res.status(http_status_1.default.CREATED).send({
                    success: true,
                    message: "Your Form has subbmitted successfully",
                    data: insertcollection,
                });
            }
            catch (error) {
                return res
                    .status(http_status_1.default.BAD_REQUEST)
                    .send({ success: false, message: "Somthing went wrong!", data: error });
            }
        }));
        this.create_patner = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const insertcollection = yield main_service_1.mainService.create_patner(req);
                return res.status(http_status_1.default.CREATED).send({
                    success: true,
                    message: "Your Form has subbmitted successfully",
                    data: insertcollection,
                });
            }
            catch (error) {
                return res
                    .status(http_status_1.default.BAD_REQUEST)
                    .send({ success: false, message: "Somthing went wrong!", data: error });
            }
        }));
        this.check_status = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const insertcollection = yield main_service_1.mainService.check_status(req);
                return res.status(http_status_1.default.CREATED).send({
                    success: true,
                    message: "Your Form has subbmitted successfully",
                    data: insertcollection,
                });
            }
            catch (error) {
                return res
                    .status(http_status_1.default.BAD_REQUEST)
                    .send({ success: false, message: "Somthing went wrong!", data: error });
            }
        }));
        this.create_order = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const reqheader = req.header("authorization");
            const header = (0, jwt_decode_1.default)(reqheader);
            try {
                const order1 = yield main_service_1.mainService.create_order(req, header);
                if (order1) {
                    const order2 = yield main_service_1.mainService.create_order_extense(req, order1);
                    if (order2) {
                        const sendmail = yield main_service_1.mainService.send_mail(req, order2);
                        if (sendmail === null || sendmail === void 0 ? void 0 : sendmail.status) {
                            const processlog = yield main_service_1.mainService.CreateProcessLog({
                                ORDER_ID: order1.ORDER_ID,
                                PROCESS_STATUS: true,
                                PERPOUS: "Form Applied and Consent email send successfully",
                            });
                            if (processlog) {
                                return res.status(http_status_1.default.CREATED).send({
                                    success: true,
                                    message: "Your Form has subbmitted successfully",
                                    data: order1,
                                });
                            }
                        }
                    }
                }
            }
            catch (error) {
                return res
                    .status(http_status_1.default.BAD_REQUEST)
                    .send({ success: false, message: "Somthing went wrong!", data: error });
            }
        }));
        this.uploadConstant = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const files = req === null || req === void 0 ? void 0 : req.files;
                const constantfile = yield main_service_1.mainService.uploadConstant(req.body.ORDER_ID, files);
                if (constantfile) {
                    const getorderid = yield main_service_1.mainService.getOrdereId(req.body.ORDER_ID);
                    if (getorderid) {
                        const getemail = yield main_service_1.mainService.getemailbyorder(getorderid === null || getorderid === void 0 ? void 0 : getorderid.ORDER_ID);
                        if (getemail) {
                            const sendmail = yield main_service_1.mainService.UploadConsentEmail(getemail === null || getemail === void 0 ? void 0 : getemail.EMAIL, req.body.ORDER_ID);
                            if (sendmail) {
                                const processlog = yield main_service_1.mainService.CreateProcessLog({
                                    ORDER_ID: getorderid === null || getorderid === void 0 ? void 0 : getorderid.ORDER_ID,
                                    PROCESS_STATUS: true,
                                    PERPOUS: "upload Constant",
                                });
                                if (processlog) {
                                    return res.status(http_status_1.default.CREATED).send({
                                        success: true,
                                        message: "Your consent is uploaded successfully",
                                        data: constantfile,
                                    });
                                }
                            }
                        }
                    }
                }
            }
            catch (error) {
                return res
                    .status(http_status_1.default.BAD_REQUEST)
                    .send({ success: false, message: "Somthing went wrong!", data: error });
            }
        }));
        this.genrateintent = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, appointmentPrice, description, customer_description, user_id, } = req.body;
                try {
                    const customer = yield stripe.customers.create({
                        email: email,
                    });
                    const ephemeralKey = yield stripe.ephemeralKeys.create({ customer: customer.id }, { apiVersion: "2022-08-01" });
                    const paymentinstance = yield stripe.paymentIntents.create({
                        amount: parseInt(appointmentPrice) * 100,
                        currency: "USD",
                        payment_method_types: ["card"],
                        description: description,
                        receipt_email: email,
                        customer: customer.id,
                        metadata: {
                            customer_email: email,
                            customer_description: customer_description,
                            user_id: user_id,
                        },
                    });
                    res.json({
                        message: "payment initiated",
                        paymentinstance,
                        clientSeceret: paymentinstance.client_secret,
                        ephemeralKey: ephemeralKey.secret,
                        customer: customer.id,
                    });
                }
                catch (err) {
                    console.log(err);
                    res.status(500).json({ message: "internal Srver Error" });
                }
            }
            catch (error) {
                return res
                    .status(http_status_1.default.BAD_REQUEST)
                    .send({ success: false, message: "Somthing went wrong!", data: error });
            }
        }));
    }
}
exports.MainController = new MainControllerClass();
//# sourceMappingURL=main.controller.js.map