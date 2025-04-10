const Joi = require('joi');

// Register validation
const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
};

// Login validation
const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
};

// update user validation
const updateUserValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
};

// forget password validation
const forgetPasswordValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email()
    });
    return schema.validate(data);
};

// reset password validation
const resetPasswordValidation = (data) => {
    const schema = Joi.object({
        password: Joi.string().min(6).required()
    });
    return schema.validate(data);
};

module.exports = {
    registerValidation,
    loginValidation,
    updateUserValidation,
    forgetPasswordValidation
}