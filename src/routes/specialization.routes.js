const { Router } = require("express");
const {
  SpecializationController,
} = require("../controllers/specialization.controller");
const { requestValidator } = require("../schema");
const {
  SpecializationSchema,
  UpdateSpecializationSchema,
} = require("../schema/specialization.schema");

const router = Router();

const SpecializationRouter = (router) => {
  router.post(
    "/",
    requestValidator({ body: SpecializationSchema }),
    SpecializationController.create()
  );

  router.put(
    "/:id",
    requestValidator({ body: UpdateSpecializationSchema }),
    SpecializationController.update()
  );

  router.delete("/:id", SpecializationController.delete());

  router.get("/:id", SpecializationController.get());

  router.get("/", SpecializationController.getAll());

  return router;
};

module.exports = {
  SpecializationRouter: SpecializationRouter(router),
};
