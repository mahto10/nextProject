const { Router } = require("express");
const { ApprovalController } = require("../controllers/approval.controller");
const { requestValidator } = require("../schema");
const { ApprovalSchema, UpdateApprovalSchema } = require("../schema/approval.schema");

const router = Router();

const ApprovalRouter = (router) => {
  router.post(
    "/",
    requestValidator({ body: ApprovalSchema }),
    ApprovalController.create()
  );

  router.put(
    "/:id",
    requestValidator({ body: UpdateApprovalSchema }),
    ApprovalController.update()
  );

   router.get("/", ApprovalController.getAll());

   
   router.get("/:id", ApprovalController.get());

   
   router.delete("/:id", ApprovalController.delete());

  return router;
};

module.exports = { ApprovalRouter: ApprovalRouter(router) };
