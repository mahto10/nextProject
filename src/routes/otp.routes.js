const { OTPController } = require("../controllers/otp.controller");
const { requestValidator } = require("../schema");
const {
  otpRequestSchema,
  verifyOTPRequestSchema,
} = require("../schema/otp.schema");

exports.OTPRouter = (router) => {
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
