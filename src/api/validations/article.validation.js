const Joi = require('joi');

const articleSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    image: Joi.string().allow(''),
    category: Joi.string().required(),
    author: Joi.string().required()
});
