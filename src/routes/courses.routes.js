const { Router } = require("express");
const { CourseController } = require("../controllers/courses.controller");
const { requestValidator } = require("../schema");
const { CourseSchema } = require("../schema/courses.schema");

const router = Router();

const CourseRouter = (router) => {
  router.post(
    "/",
    requestValidator({ body: CourseSchema }),
    CourseController.create()
  );

  router.get("/", CourseController.getAll());

  return router;
};

module.exports = { CourseRouter: CourseRouter(router) };
