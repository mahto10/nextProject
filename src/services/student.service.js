const { Student } = require('../models/student.model');

class StudentService {
  async signUp(user) {
    const { name, email, password } = user;
    const newStudent = await Student.create({
      name,
      email,
      password,
    });

    return newStudent;
  }
}

module.exports = { StudentService: new StudentService() };
