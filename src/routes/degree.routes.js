const { Router } = require("express");
const { DegreeController } = require("../controllers/degree.controller");
const { requestValidator } = require("../schema");
const { DegreeSchema } = require("../schema/degree.schema");

const router = Router();

const DegreeRouter = (router) => {
  router.post(
    "/",
    requestValidator({ body: DegreeSchema }),
    DegreeController.create()
  );

  return router;
};

module.exports = { DegreeRouter: DegreeRouter(router) };
