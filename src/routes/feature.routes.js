const { Router } = require("express");
const { FeatureController } = require("../controllers/feature.controller");
const { requestValidator } = require("../schema");
const { FeatureSchema } = require("../schema/feature.schema");

const router = Router();

const FeatureRouter = (router) => {
  router.post(
    "/",
    requestValidator({ body: FeatureSchema }),
    FeatureController.create()
  );

  return router;
};

module.exports = { FeatureRouter: FeatureRouter(router) };
