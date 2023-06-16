import express, { Express, Response, Request } from 'express';
import { AuthController } from '../../controller/auth.controller';
import { validate } from '../../middlewares/validate';
import { loginValidation, registerValidation } from '../../validation/AuthValidation';
const authrouter = express.Router();



authrouter.post("/register", validate(registerValidation.body), AuthController.CreateUser);
authrouter.post("/login", validate(loginValidation.body), AuthController.LoginUser);
authrouter.post("/forgot-password",AuthController.ForgotPassword);

export default authrouter




