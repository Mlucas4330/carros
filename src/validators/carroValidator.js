const Joi = require('joi')

module.exports = Joi.object({
    ano: Joi.string().required(),
    marca: Joi.string().required(),
    modelo: Joi.string().required(),
    ano: Joi.number().required(),
    cor: Joi.string().required()
})