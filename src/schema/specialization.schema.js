const Joi = require("joi");

const SpecializationSchema = Joi.object({
  specializationName: Joi.string().required(),
  courses: Joi.string().hex().length(24).required(),
  numberOfYear: Joi.number().required(),
  fees: Joi.string().required(),
  description: Joi.string().required(),
  eligibility: Joi.array().items(Joi.string().hex().length(24)).required(),
}).required();

const UpdateSpecializationSchema = Joi.object({
  specializationName: Joi.string().optional(),
  courses: Joi.string().hex().length(24).optional(),
  numberOfYear: Joi.number().optional(),
  fees: Joi.string().optional(),
  description: Joi.string().optional(),
  eligibility: Joi.array().items(Joi.string().hex().length(24)).optional(),
}).required();

module.exports = { SpecializationSchema, UpdateSpecializationSchema };
