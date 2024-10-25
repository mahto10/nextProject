const Joi = require("joi");

const CloudinaryUploadSchema = Joi.object({
  image: Joi.any().required(),
});

module.exports = { CloudinaryUploadSchema };
