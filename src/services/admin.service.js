const { Admin } = require("../models/admin.model");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/jwt/jwt");
const TokenTypesEnum = require("../utils/enum/tokenEnum");
const otpService = require("../services/otp.service");
const { generateRandomString } = require("../utils/common.utils");
const { Logger } = require("../lib/logger.lib");

class AdminService {
  async addSubAdmin(loggedInAdmin, user) {
    const { name, email, permissions = [] } = user;

    const admin = await Admin.findOne({ email: loggedInAdmin.email });

    if (!admin) {
      throw new Error("Admin not found");
    }

    const plainPassword = generateRandomString();

    Logger.info("Admin created with password " + plainPassword);

    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    const newAdmin = await Admin.create({
      name,
      email,
      password: hashedPassword,
      permissions,
    });

    newAdmin.password = undefined;

    return newAdmin;
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

    if (!isOtpValid.success) {
      throw new Error(isOtpValid.message);
    }

    const admin = await Admin.findOne({ email });

    if (!admin) {
      throw new Error("Admin not found");
    }

    const token = generateToken(
      { id: admin.id, email: admin.email },
      TokenTypesEnum.AUTHENTICATION
    );

    admin.password = undefined;

    return { admin, token, message: "OTP verified, login successful" };
  }

  async forgotPassword({ email }) {
    const admin = await Admin.findOne({ email });

    if (!admin) {
      throw new Error("Admin not found");
    }

    const sendOtp = await otpService.generateAndSendOTP(email);

    return {
      success: true,
      message:
        "OTP has been sent. Please check your email to reset your password.",
      sendOtp,
    };
  }

  async verifyOtpAndChangePassword({ email, otp, newPassword }) {
    const isOtpValid = await otpService.verifyOTP(email, otp);

    if (!isOtpValid) {
      throw new Error("Invalid or expired OTP");
    }

    const admin = await Admin.findOne({ email });

    if (!admin) {
      throw new Error("Admin not found");
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    admin.password = hashedNewPassword;
    await admin.save();

    const token = generateToken(
      { id: admin.id, email: admin.email },
      TokenTypesEnum.PASSWORD_RESET
    );

    return {
      success: true,
      message: "Password has been successfully reset",
      token,
    };
  }

  async changePassword({ email, currentPassword, newPassword }) {
    const admin = await Admin.findOne({ email });

    if (!admin) {
      throw new Error("Admin not found");
    }

    const isCurrentPasswordValid = await bcrypt.compare(
      currentPassword,
      admin.password
    );

    if (!isCurrentPasswordValid) {
      throw new Error("Current password is incorrect");
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    admin.password = hashedNewPassword;
    await admin.save();

    return {
      success: true,
      message: "Password has been changed successfully",
    };
  }
}

module.exports = { AdminService: new AdminService() };
