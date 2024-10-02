const { Router } = require("express");
const { ApprovalController } = require("../controllers/approval.controller");
const { requestValidator } = require("../schema");
const { ApprovalSchema } = require("../schema/approval.schema");

const router = Router();

const ApprovalRouter = (router) => {
  router.post(
    "/",
    requestValidator({ body: ApprovalSchema }),
    ApprovalController.create()
  );

  return router;
};

module.exports = { ApprovalRouter: ApprovalRouter(router) };
