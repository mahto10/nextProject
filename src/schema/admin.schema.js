const Joi = require("joi");

exports.createAdminRequest = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  permissions: Joi.array().items(Joi.string()).required(),
});

exports.loginAdminRequest = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

exports.verifyOtp = Joi.object({
  email: Joi.string().email().required(),
  otp: Joi.string().required(),
});
