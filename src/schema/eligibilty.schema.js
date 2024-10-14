const Joi = require("joi");

const EligibiltySchema = Joi.object({
  eligibiltyName: Joi.array().items(Joi.string()).required(),
}).required();

const UpdateEligibilitySchema = Joi.object({
  eligibiltyName: Joi.array().items(Joi.string()),
}).required();

module.exports = { EligibiltySchema, UpdateEligibilitySchema };
