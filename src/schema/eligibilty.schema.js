const Joi = require("joi");

const EligibiltySchema = Joi.object({
  eligibiltyName: Joi.array().items(Joi.string()).required(),
}).required();

exports.EligibiltySchema = EligibiltySchema;
