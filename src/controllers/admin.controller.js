const BaseController = require("./base.controller");
const { AdminService } = require("../services/admin.service");

class AdminController extends BaseController {
  constructor() {
    super();
  }

  addSubAdmin() {
    return this.asyncWrapper(async (req, res) => {
      const loggedInAdmin = req.user;

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
}

module.exports = { AdminController: new AdminController() };
