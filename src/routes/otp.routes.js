const { Router } = require("express");
const { OTPController } = require("../controllers/otp.controller");
const { requestValidator } = require("../schema");
const {
  otpRequestSchema,
  verifyOTPRequestSchema,
} = require("../schema/otp.schema");

const router = Router();

const OTPRouter = (router) => {
  router.post(
    "/generate",
    requestValidator({ body: otpRequestSchema }),
    OTPController.generateOTP
  );
  router.post(
    "/verify",
    requestValidator({ body: verifyOTPRequestSchema }),
    OTPController.verifyOTP
  );

  return router;
};

module.exports = { OTPRouter: OTPRouter(router) };
