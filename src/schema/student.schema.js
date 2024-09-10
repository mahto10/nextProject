const Joi = require('joi');

exports.createStudentRequest = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});
