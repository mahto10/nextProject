const { Router } = require("express");
const {
  EligibiltyController,
} = require("../controllers/eligibilty.controller");
const { requestValidator } = require("../schema");
const {
  EligibiltySchema,
  UpdateEligibilitySchema,
} = require("../schema/eligibilty.schema");

const router = Router();

const EligibiltyRouter = (router) => {
  router.post(
    "/",
    requestValidator({ body: EligibiltySchema }),
    EligibiltyController.create()
  );

  router.put(
    "/:id",
    requestValidator({ body: UpdateEligibilitySchema }),
    EligibiltyController.update()
  );

  router.delete("/:id", EligibiltyController.delete());

  router.get("/:id", EligibiltyController.get());

  router.get("/", EligibiltyController.getAll());

  return router;
};

module.exports = { EligibiltyRouter: EligibiltyRouter(router) };
