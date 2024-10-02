const { Router } = require("express");
const { EligibiltyController } = require("../controllers/eligibilty.controller");
const { requestValidator } = require("../schema");
const { EligibiltySchema } = require("../schema/eligibilty.schema");

const router = Router();

const EligibiltyRouter = (router) => {
  router.post(
    "/",
    requestValidator({ body: EligibiltySchema }),
    EligibiltyController.create()
  );

  return router;
};

module.exports = { EligibiltyRouter: EligibiltyRouter(router) };
