const Joi = require('joi');

exports.ConfigSchema = Joi.object({
  app: Joi.object({
    env: Joi.string(),
    port: Joi.string()
      .custom((val) => Number(val))
      .default(4000),
  }).required(),
  db: Joi.object({
    host: Joi.string().required(),
    port: Joi.string().required(),
    name: Joi.string().required(),
    user: Joi.string().required(),
    password: Joi.string().required(),
  }).required(),
}).required();
