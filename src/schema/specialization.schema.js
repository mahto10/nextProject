const Joi = require("joi");

const SpecializationSchema = Joi.object({
  specializationName: Joi.string().required(),
  eligibility: Joi.array().items(Joi.string().hex().length(24)).required(),
  numberOfYear: Joi.number().required(),
}).required();

exports.SpecializationSchema = SpecializationSchema;
