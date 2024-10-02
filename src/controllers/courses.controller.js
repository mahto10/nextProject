const { CourseService } = require("../services/courses.service");
const BaseController = require("./base.controller");

class CourseController extends BaseController {
  constructor(service) {
    super(service);
  }

  getAll() {
    return this.asyncWrapper(async (req, res) => {
      const result = await CourseService.findAll();
      this.send(res, result, 201);
    });
  }

 
}

module.exports = { CourseController: new CourseController(CourseService) };
