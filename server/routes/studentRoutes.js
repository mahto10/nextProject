const express = require("express");
const StudentController = require("../controllers/studentController");

const router = express.Router();

const studentController = new StudentController();

router.route("/signup").post(studentController.studentSignUp);

module.exports = router;
