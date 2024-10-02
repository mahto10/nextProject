const { Router } = require("express");
const { AdminRouter } = require("./admin.routes");
const { OTPRouter } = require("./otp.routes");
const { FeatureRouter } = require("./feature.routes");
const { CourseRouter } = require("./courses.routes");
const { StreamRouter } = require("./stream.routes");
const { DegreeRouter } = require("./degree.routes");
const { SpecializationRouter } = require("./specialization.routes");
const { EligibiltyRouter } = require("./eligibilty.routes");
const { ApprovalRouter } = require("./approval.routes");
const { EducatorRouter } = require("./educator.routes");

const router = Router();

const V1_PREFIX = "/api/v1";

router.use(`${V1_PREFIX}/admin`, AdminRouter);
router.use(`${V1_PREFIX}/otp`, OTPRouter);
router.use(`${V1_PREFIX}/feature`, FeatureRouter);
router.use(`${V1_PREFIX}/course`, CourseRouter);
router.use(`${V1_PREFIX}/stream`, StreamRouter);
router.use(`${V1_PREFIX}/degree`, DegreeRouter);
router.use(`${V1_PREFIX}/specialization`, SpecializationRouter);
router.use(`${V1_PREFIX}/eligibilty`, EligibiltyRouter);
router.use(`${V1_PREFIX}/approval`, ApprovalRouter);
router.use(`${V1_PREFIX}/educator`, EducatorRouter);

module.exports = { V1Router: router };
