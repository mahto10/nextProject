const BaseController = require("./base.controller");
const { AdminService } = require("../services/admin.service");

class AdminController extends BaseController {
  constructor() {
    super();
  }

  addSubAdmin() {
    return this.asyncWrapper(async (req, res) => {
      const loggedInAdmin = req.admin;

      const { name, email, permissions } = req.body;

      const result = await AdminService.addSubAdmin(loggedInAdmin, {
        name,
        email,
        permissions,
      });

      this.send(res, result);
    });
  }

  login() {
    return this.asyncWrapper(async (req, res) => {
      const { email, password } = req.body;

      const response = await AdminService.login({
        email,
        password,
      });

      this.send(res, response);
    });
  }

  verifyLoginOTP() {
    return this.asyncWrapper(async (req, res) => {
      const { email, otp } = req.body;
      const response = await AdminService.verifyLoginOTP({
        email,
        otp,
      });
      this.send(res, response);
    });
  }

  forgotPassword() {
    return this.asyncWrapper(async (req, res) => {
      const { email } = req.body;

      const response = await AdminService.forgotPassword({ email });

      this.send(res, response);
    });
  }

  verifyOtpAndChangePassword() {
    return this.asyncWrapper(async (req, res) => {
      const { email, otp, newPassword } = req.body;

      const response = await AdminService.verifyOtpAndChangePassword({
        email,
        otp,
        newPassword,
      });

      this.send(res, response);
    });
  }

  changePassword() {
    return this.asyncWrapper(async (req, res) => {
      const { email, currentPassword, newPassword } = req.body;

      const response = await AdminService.changePassword({
        email,
        currentPassword,
        newPassword,
      });

      this.send(res, response);
    });
  }
}

module.exports = { AdminController: new AdminController() };
