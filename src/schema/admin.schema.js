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

exports.forgotPasswordRequest = Joi.object({
  email: Joi.string().email().required(),
});

exports.verifyOtpAndChangePasswordRequest = Joi.object({
  email: Joi.string().email().required(),
  otp: Joi.string().required(),
  newPassword: Joi.string().min(6).required(),
});

exports.changePasswordRequest = Joi.object({
  email: Joi.string().email().required(),
  currentPassword: Joi.string().required(),
  newPassword: Joi.string().min(6).required(),
});
