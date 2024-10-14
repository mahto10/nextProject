const { Router } = require("express");
const { StreamController } = require("../controllers/stream.conroller");
const { requestValidator } = require("../schema");
const { StreamSchema, UpdateStreamSchema } = require("../schema/stream.schema");

const router = Router();

const StreamRouter = (router) => {
  router.post(
    "/",
    requestValidator({ body: StreamSchema }),
    StreamController.create()
  );

  router.put(
    "/:id",
    requestValidator({ body: UpdateStreamSchema }),
    StreamController.update()
  );

  router.delete("/:id", StreamController.delete());

  router.get("/:id", StreamController.get());

  router.get("/", StreamController.getAll());

  return router;
};

module.exports = { StreamRouter: StreamRouter(router) };
