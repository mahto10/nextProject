const Joi = require("joi");

const FeatureSchema = Joi.object({
  name: Joi.string().required(),
  image: Joi.string().required(),
}).required();

exports.FeatureSchema = FeatureSchema;
