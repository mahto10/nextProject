const Joi = require("joi");

const EligibiltySchema = Joi.object({
  eligibiltyName: Joi.string().required(),
}).required();

const UpdateEligibilitySchema = Joi.object({
  eligibiltyName: Joi.string().optional(),
}).required();

module.exports = { EligibiltySchema, UpdateEligibilitySchema };
