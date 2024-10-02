const { Router } = require("express");
const { SpecializationController } = require("../controllers/specialization.controller");
const { requestValidator } = require("../schema");
const { SpecializationSchema } = require("../schema/specialization.schema");

const router = Router();

const SpecializationRouter = (router) => {
  router.post(
    "/",
    requestValidator({ body: SpecializationSchema }),
    SpecializationController.create()
  );

  return router;
};

module.exports = {
  SpecializationRouter: SpecializationRouter(router),
};
