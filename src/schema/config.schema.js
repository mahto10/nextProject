const Joi = require("joi");

const ConfigSchema = Joi.object({
  app: Joi.object({
    env: Joi.string().valid("development", "production", "test").required(),
    port: Joi.number().required(),
  }).required(),

  db: Joi.object({
    uri: Joi.string().uri().required(),
  }).required(),
});

exports.ConfigSchema = ConfigSchema;
