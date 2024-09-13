const { AdminController } = require("../controllers/admin.controller");
const { requestValidator } = require("../schema");
const {
  createAdminRequest,
  loginAdminRequest,
  verifyOtp,
} = require("../schema/admin.schema");

exports.AdminRouter = (router) => {
  router.post(
    "/add-sub-admin",
    requestValidator({ body: createAdminRequest }),
    AdminController.addSubAdmin()
  );

  router.post(
    "/login",
    requestValidator({ body: loginAdminRequest }),
    AdminController.login()
  );

  router.post(
    "/verify-login-otp",
    requestValidator({ body: verifyOtp }),
    AdminController.verifyLoginOTP()
  );

  return router;
};
