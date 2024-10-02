const { Router } = require("express");
const { StreamController } = require("../controllers/stream.conroller");
const { requestValidator } = require("../schema");
const { StreamSchema } = require("../schema/stream.schema");

const router = Router();

const StreamRouter = (router) => {
  router.post(
    "/",
    requestValidator({ body: StreamSchema }),
    StreamController.create()
  );

  return router;
};

module.exports = { StreamRouter: StreamRouter(router) };
