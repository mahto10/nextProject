const Student = require("../models/studentModel");

const studentSignUp = async (user) => {
  const { name, email, password } = user;
  try {
    const newStudent = await Student.create({ name, email, password });
    return newStudent;
  } catch (error) {
    console.error("Error creating student:", error);
    throw error;
  }
};

module.exports = { studentSignUp };
