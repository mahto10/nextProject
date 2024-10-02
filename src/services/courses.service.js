const { Course } = require("../models/courses.model");
const { BaseService } = require("./base.service");

class CourseService extends BaseService {
  constructor(model) {
    super(model);
  }
}

module.exports = { CourseService: new CourseService(Course) };
