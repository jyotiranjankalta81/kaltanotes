"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidation = exports.registerValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const password = (value, helpers) => {
    if (value.length < 8) {
        return helpers.message('password must be at least 8 characters');
    }
    if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
        return helpers.message('password must contain at least 1 letter and 1 number');
    }
    return value;
};
exports.registerValidation = {
    body: joi_1.default.object().keys({
        ID: joi_1.default.number(),
        USERNAME: joi_1.default.string().required(),
        F_NAME: joi_1.default.string().required(),
        L_NAME: joi_1.default.string().required(),
        EMAIL: joi_1.default.string().required().email(),
        PASSWORD: joi_1.default.string().required().custom(password),
    }),
};
exports.loginValidation = {
    body: joi_1.default.object().keys({
        EMAIL: joi_1.default.string().required().email(),
        PASSWORD: joi_1.default.string().required().custom(password),
    }),
};
//# sourceMappingURL=AuthValidation.js.map