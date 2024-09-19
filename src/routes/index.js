const { Router } = require("express");
const { AdminRouter } = require("./admin.routes");
const { OTPRouter } = require("./otp.routes");
const { FeatureRouter } = require("./feature.routes");

const router = Router();

const V1_PREFIX = "/api/v1";

router.use(`${V1_PREFIX}/admin`, AdminRouter);
router.use(`${V1_PREFIX}/otp`, OTPRouter);
router.use(`${V1_PREFIX}/feature`, FeatureRouter);

module.exports = { V1Router: router };
