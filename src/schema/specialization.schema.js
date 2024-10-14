const Joi = require("joi");

const SpecializationSchema = Joi.object({
  specializationName: Joi.string().required(),
  eligibility: Joi.array().items(Joi.string().hex().length(24)).required(),
  numberOfYear: Joi.number().required(),
}).required();

const UpdateSpecializationSchema = Joi.object({
  specializationName: Joi.string(),
  eligibility: Joi.array().items(Joi.string().hex().length(24)),
  numberOfYear: Joi.number(),
}).required();

module.exports = { SpecializationSchema, UpdateSpecializationSchema };
