const { Router } = require("express");
const { FeatureController } = require("../controllers/feature.controller");
const { requestValidator } = require("../schema");
const {
  FeatureSchema,
  UpdateFeatureSchema,
} = require("../schema/feature.schema");

const router = Router();

const FeatureRouter = (router) => {
  router.post(
    "/",
    requestValidator({ body: FeatureSchema }),
    FeatureController.create()
  );

  router.put(
    "/:id",
    requestValidator({ body: UpdateFeatureSchema }),
    FeatureController.update()
  );

  router.delete("/:id", FeatureController.delete());

  router.get("/:id", FeatureController.get());

  router.get("/", FeatureController.getAll());

  return router;
};

module.exports = { FeatureRouter: FeatureRouter(router) };
