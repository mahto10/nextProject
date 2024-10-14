const { Router } = require("express");
const { EducatorController } = require("../controllers/educator.controller");
const { requestValidator } = require("../schema");
const { EducatorSchema, UpdateEducatorSchema } = require("../schema/educator.schema");
const { GlobalMiddleware } = require("../middlewares/global.middleware");

const router = Router();

const EducatorRouter = (router) => {
  router.post(
    "/",
    GlobalMiddleware.adminAuth(),
    requestValidator({ body: EducatorSchema }),
    EducatorController.create()
  );

    router.put(
      "/:id",
      requestValidator({ body: UpdateEducatorSchema }),
      EducatorController.update()
    );

    router.delete("/:id", EducatorController.delete());

    router.get("/:id", EducatorController.get());

    router.get("/", EducatorController.getAll());

  return router;
};

module.exports = { EducatorRouter: EducatorRouter(router) };
