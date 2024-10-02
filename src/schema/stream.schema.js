const Joi = require("joi");

const StreamSchema = Joi.object({
  streamName: Joi.string().required(),
}).required();

exports.StreamSchema = StreamSchema;
