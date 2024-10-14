const Joi = require("joi");

const StreamSchema = Joi.object({
  streamName: Joi.string().required(),
}).required();

const UpdateStreamSchema = Joi.object({
  streamName: Joi.string().required(),
}).required();

module.exports = { StreamSchema, UpdateStreamSchema };
