const Joi = require("joi");

const FeatureSchema = Joi.object({
  name: Joi.string().required(),
  image: Joi.string().required(),
}).required();

const UpdateFeatureSchema = Joi.object({
  name: Joi.string(),
  image: Joi.string(),
}).required();

module.exports = { FeatureSchema, UpdateFeatureSchema };
