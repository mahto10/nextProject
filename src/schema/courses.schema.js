const Joi = require("joi");

const CourseSchema = Joi.object({
  fullCourseName: Joi.string().required(),
  shortCourseName: Joi.string().required(),
  degree: Joi.string().hex().length(24).required(),
  specialization: Joi.string().hex().length(24).required(),
}).required();

exports.CourseSchema = CourseSchema;
