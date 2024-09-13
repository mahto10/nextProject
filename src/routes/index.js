const { Router } = require("express");
const { StudentRouter } = require("./student.routes");
const { AdminRouter } = require("./admin.routes");
const { OTPRouter } = require("./otp.routes");

const mainRouter = Router();

const V1_PREFIX = "/api/v1";

const studentRouter = Router();
const adminRouter = Router();
const otpRouter = Router();

mainRouter.use(`${V1_PREFIX}/student`, StudentRouter(studentRouter));
mainRouter.use(`${V1_PREFIX}/admin`, AdminRouter(adminRouter));
mainRouter.use(`${V1_PREFIX}/otp`, OTPRouter(otpRouter));

module.exports = { V1Router: mainRouter };
