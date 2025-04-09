const Joi = require('joi');

const createUserValidation = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    avatar: Joi.string().allow(''),
    bio: Joi.string().allow(''),
    rule: Joi.string().required()
});

const updateUserValidation = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    avatar: Joi.string().allow(''),
    bio: Joi.string().allow(''),
    rule: Joi.string().required()
})
module.exports = { createUserValidation, updateUserValidation };