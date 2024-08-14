const Joi = require('joi');
const { validate } = require('../utils/validate');

const register = validate({
    body: Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().regex(/^[\w]{6,30}$/).required()
    })
})

module.exports = {
    registerValidation: register
}