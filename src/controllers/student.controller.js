const BaseController = require('./base.controller');
const { StudentService } = require('../services/student.service');

class StudentController extends BaseController {
  constructor() {
    super();
  }

  signUp() {
    return this.asyncWrapper(async (req, res) => {
      const newUser = await StudentService.signUp(req.body);

      this.send(res, newUser);
    });
  }
}

module.exports = { StudentController: new StudentController() };
