const { Admin } = require("../models/admin.model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/jwt/jwt");
const TokenTypesEnum = require("../utils/enum/tokenEnum");
const otpService = require("../services/otp.service");
const { generateRandomString } = require("../utils/common.utils");

class AdminService {
  async addSubAdmin(user) {
    const { name, email, permissions = [] } = user;

    const plainPassword = generateRandomString();

    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    const newAdmin = await Admin.create({
      name,
      email,
      password: hashedPassword,
      permissions,
    });

    return { newAdmin, plainPassword };
  }

  async login({ email, password }) {
    const admin = await Admin.findOne({ email });

    if (!admin) {
      throw new Error("Admin not found");
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }

    const sendOtp = await otpService.generateAndSendOTP(email);

    return {
      success: true,
      message: "OTP has been sent. Please verify to complete login.",
      sendOtp,
    };
  }

  async verifyLoginOTP({ email, otp }) {
    const isOtpValid = await otpService.verifyOTP(email, otp);

    if (!isOtpValid) {
      throw new Error("Invalid or expired OTP");
    }

    const admin = await Admin.findOne({ email });

    if (!admin) {
      throw new Error("Admin not found");
    }

    const token = generateToken(
      { id: admin.id, email: admin.email },
      TokenTypesEnum.AUTHENTICATION
    );

    return { admin, token, message: "OTP verified, login successful" };
  }
}

module.exports = { AdminService: new AdminService() };
