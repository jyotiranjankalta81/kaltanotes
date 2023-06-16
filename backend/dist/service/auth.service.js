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
exports.UserService = void 0;
const user_model_1 = require("../model/user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const session_model_1 = require("../model/session.model");
const uuidv4_1 = require("uuidv4");
const resetpassword_1 = require("../model/resetpassword");
const randomnumber_1 = require("../utils/randomnumber");
const sendMail_1 = require("../utils/sendMail");
const resetpasword_1 = require("../template/resetpasword");
class UserServiceClass {
    constructor() {
        this.GetuserbyEmail = (EMAIL) => __awaiter(this, void 0, void 0, function* () {
            const result = yield user_model_1.UserInstance.findOne({
                where: {
                    EMAIL: EMAIL,
                },
            });
            return result;
        });
        this.GetuserbyID = (ID) => __awaiter(this, void 0, void 0, function* () {
            const result = yield user_model_1.UserInstance.findOne({
                where: {
                    ID: ID,
                },
            });
            return result;
        });
        this.CreateUser = (request) => __awaiter(this, void 0, void 0, function* () {
            const salt = yield bcrypt_1.default.genSalt(10);
            const hashedpassword = bcrypt_1.default.hashSync(request.PASSWORD, salt);
            const result = yield user_model_1.UserInstance.create({
                USERROLE: 0,
                USERNAME: request.USERNAME,
                F_NAME: request.F_NAME,
                L_NAME: request.L_NAME,
                EMAIL: request.EMAIL,
                PASSWORD: hashedpassword,
                DOB: null,
                VISANO: null,
                EMAILSTATUS: false,
                ISDELETED: false,
            });
            return result;
        });
        this.LoginUser = (EMAIL, PASSWORD, COMPPASSWORD) => __awaiter(this, void 0, void 0, function* () {
            const comparepassword = bcrypt_1.default.compare(PASSWORD, COMPPASSWORD);
            return comparepassword;
        });
        this.CresteSession = (request) => __awaiter(this, void 0, void 0, function* () {
            const salt = yield bcrypt_1.default.genSalt(10);
            const result = yield session_model_1.SessionInstance.create({
                SESSION_ID: (0, uuidv4_1.uuid)(),
                USERAGENT: request.USERAGENT,
                UERIP: request.UERIP,
                USERID: request.USERID,
                SESSION_STATUS: true,
            });
            return result;
        });
        this.CloseOldSession = (request) => __awaiter(this, void 0, void 0, function* () {
            const salt = yield bcrypt_1.default.genSalt(10);
            const result = yield session_model_1.SessionInstance.update({
                SESSION_STATUS: false,
            }, {
                where: {
                    USERID: request.USERID,
                },
            });
            return result;
        });
        this.checkotp = (EMAIL) => __awaiter(this, void 0, void 0, function* () {
            const result = yield resetpassword_1.ResetInstance.findOne({
                where: {
                    EMAIL: EMAIL,
                },
            });
            return result;
        });
        this.createOpt = (EMAIL) => __awaiter(this, void 0, void 0, function* () {
            const result = "";
            const resetotp = (0, randomnumber_1.otpgenerator)(6);
            yield resetpassword_1.ResetInstance.create({
                EMAIL: EMAIL,
                RESET_OTP: resetotp,
            }).then((res) => __awaiter(this, void 0, void 0, function* () {
                const nodemail = yield (0, sendMail_1.sendMail)(EMAIL, "GCMSBuddy - Reset Password Request", "", (0, resetpasword_1.resetpassword)(resetotp));
                return nodemail;
            }));
            return result;
        });
        this.updateOpt = (EMAIL) => __awaiter(this, void 0, void 0, function* () {
            const result = "";
            const resetotp = (0, randomnumber_1.otpgenerator)(6);
            yield resetpassword_1.ResetInstance.update({
                RESET_OTP: resetotp,
            }, {
                where: {
                    EMAIL: EMAIL,
                },
            }).then((res) => __awaiter(this, void 0, void 0, function* () {
                const nodemail = yield (0, sendMail_1.sendMail)(EMAIL, "GCMSBuddy - Reset Password Request", "", (0, resetpasword_1.resetpassword)(resetotp));
                return nodemail;
            }));
            return result;
        });
    }
}
exports.UserService = new UserServiceClass();
//# sourceMappingURL=auth.service.js.map