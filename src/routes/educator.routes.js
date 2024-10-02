const { Router } = require("express");
const { EducatorController } = require("../controllers/educator.controller");
const { requestValidator } = require("../schema");
const { EducatorSchema } = require("../schema/educator.schema");

const router = Router();

const EducatorRouter = (router) => {
  router.post(
    "/",
    requestValidator({ body: EducatorSchema }),
    EducatorController.create()
  );

  return router;
};

module.exports = { EducatorRouter: EducatorRouter(router) };
