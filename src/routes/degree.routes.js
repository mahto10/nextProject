const { Router } = require("express");
const { DegreeController } = require("../controllers/degree.controller");
const { requestValidator } = require("../schema");
const { DegreeSchema, UpadteDegreeSchema } = require("../schema/degree.schema");

const router = Router();

const DegreeRouter = (router) => {
  router.post(
    "/",
    requestValidator({ body: DegreeSchema }),
    DegreeController.create()
  );

  router.put(
    "/:id",
    requestValidator({ body: UpadteDegreeSchema }),
    DegreeController.update()
  );

  router.delete("/:id", DegreeController.delete());

  router.get("/:id", DegreeController.get());

  router.get("/", DegreeController.getAll());

  return router;
};

module.exports = { DegreeRouter: DegreeRouter(router) };
