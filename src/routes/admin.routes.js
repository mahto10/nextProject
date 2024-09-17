const { AdminController } = require("../controllers/admin.controller");
const { requestValidator } = require("../schema");
const {
  createAdminRequest,
  loginAdminRequest,
  verifyOtp,
  forgotPasswordRequest,
  verifyOtpAndChangePasswordRequest,
  changePasswordRequest,
} = require("../schema/admin.schema");
const authMiddleware = require("../middlewares/auth.middleware");

exports.AdminRouter = (router) => {
  router.post(
    "/add-sub-admin",
    authMiddleware(),
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

  router.post(
    "/forgot-password",
    requestValidator({ body: forgotPasswordRequest }),
    AdminController.forgotPassword()
  );

  router.post(
    "/verify-otp-reset-password",
    requestValidator({ body: verifyOtpAndChangePasswordRequest }),
    AdminController.verifyOtpAndChangePassword()
  );

  router.post(
    "/change-password",
    authMiddleware(),
    requestValidator({ body: changePasswordRequest }),
    AdminController.changePassword()
  );

  return router;
};
