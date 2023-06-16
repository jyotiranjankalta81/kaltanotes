import Joi from "joi";


const password = (value:string, helpers:any) => {
    if (value.length < 8) {
      return helpers.message('password must be at least 8 characters');
    }
    if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
      return helpers.message('password must contain at least 1 letter and 1 number');
    }
    return value;
  };

export const registerValidation = {
  body: Joi.object().keys({
    ID: Joi.number(),
    USERNAME: Joi.string().required(),
    F_NAME: Joi.string().required(),
    L_NAME: Joi.string().required(),
    EMAIL: Joi.string().required().email(),
    PASSWORD: Joi.string().required().custom(password),
  }),
};

export const loginValidation = {
  body: Joi.object().keys({
    EMAIL: Joi.string().required().email(),
    PASSWORD: Joi.string().required().custom(password),
  }),
};
