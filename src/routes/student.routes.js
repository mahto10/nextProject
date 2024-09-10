const { StudentController } = require('../controllers/student.controller');
const { requestValidator } = require('../schema');
const { createStudentRequest } = require('../schema/student.schema');

exports.StudentRouter = (router) => {
  router.post('/', requestValidator({ body: createStudentRequest }), StudentController.signUp());

  return router;
};
