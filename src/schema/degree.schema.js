const Joi = require("joi");

const DegreeSchema = Joi.object({
  degreeName: Joi.string().required(),
  stream: Joi.string().hex().length(24).required(),
}).required();

const UpadteDegreeSchema = Joi.object({
  degreeName: Joi.string(),
  stream: Joi.string().hex().length(24),
}).required();

module.exports = { DegreeSchema, UpadteDegreeSchema };
