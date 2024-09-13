const BaseController = require("./base.controller");
const { AdminService } = require("../services/admin.service");
const req = require("express/lib/request");

class AdminController extends BaseController {
  constructor() {
    super();
  }

  addSubAdmin() {
    return this.asyncWrapper(async (req, res) => {
      const newUser = await AdminService.addSubAdmin(req.body);

      this.send(res, newUser);
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
