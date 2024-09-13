const Joi = require("joi");

exports.otpRequestSchema = Joi.object({
  email: Joi.string().email().required(),
});

exports.verifyOTPRequestSchema = Joi.object({
  email: Joi.string().email().required(),
  otp: Joi.string().required(),
});
