const BaseController = require("./base.controller");
const { generateAndStoreOTP, verifyOTP } = require("../services/otp.service");

class OTPController extends BaseController {
  constructor() {
    super();
  }

  generateOTP = this.asyncWrapper(async (req, res) => {
    const otpResponse = await generateAndSendOTP(req.body.email);
    this.send(res, otpResponse);
  });

  verifyOTP = this.asyncWrapper(async (req, res) => {
    const { email, otp } = req.body;
    const result = await verifyOTP(email, otp);

    if (!result.success) {
      return this.send(res, result, 400);
    }

    return this.send(res, result, 200);
  });
}

module.exports = { OTPController: new OTPController() };
