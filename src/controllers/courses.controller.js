const { CourseService } = require("../services/courses.service");
const BaseController = require("./base.controller");

class CourseController extends BaseController {
  constructor(service) {
    super(service);
  }
}

module.exports = { CourseController: new CourseController(CourseService) };
