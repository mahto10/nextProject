const BaseController = require("../controllers/baseController");
const studentService = require("../services/studentService");

class StudentController extends BaseController {
  constructor() {
    super();
    this.studentSignUp = this.studentSignUp.bind(this);
  }

  studentSignUp(req, res, next) {
    return this.asyncWrapper(async (req, res, next) => {
      const newUser = await studentService.studentSignUp(req.body);

      res.status(201).json({ success: true, data: newUser });
    })(req, res, next);
  }
}

module.exports = StudentController;
