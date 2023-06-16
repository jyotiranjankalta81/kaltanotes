"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("../../controller/auth.controller");
const validate_1 = require("../../middlewares/validate");
const AuthValidation_1 = require("../../validation/AuthValidation");
const authrouter = express_1.default.Router();
authrouter.post("/register", (0, validate_1.validate)(AuthValidation_1.registerValidation.body), auth_controller_1.AuthController.CreateUser);
authrouter.post("/login", (0, validate_1.validate)(AuthValidation_1.loginValidation.body), auth_controller_1.AuthController.LoginUser);
authrouter.post("/forgot-password", auth_controller_1.AuthController.ForgotPassword);
exports.default = authrouter;
//# sourceMappingURL=auth.routes.js.map