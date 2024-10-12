const { Router } = require("express");
const { CourseController } = require("../controllers/courses.controller");
const { requestValidator } = require("../schema");
const { CourseSchema } = require("../schema/courses.schema");
const { UpdateCourseSchema } = require("../schema/courses.schema");
const { GlobalMiddleware } = require("../middlewares/global.middleware");

const router = Router();

const CourseRouter = (router) => {
  router.post(
    "/",
    // GlobalMiddleware.adminAuth(),
    // GlobalMiddleware.permission("Course_Management"),
    requestValidator({ body: CourseSchema }),
    CourseController.create()
  );

  router.put(
    "/:id",
    requestValidator({ body: UpdateCourseSchema }),
    CourseController.update()
  );

  router.delete("/:id", CourseController.delete());

  router.get("/:id", CourseController.get());

  router.get("/", CourseController.getAll());

  return router;
};

module.exports = { CourseRouter: CourseRouter(router) };
