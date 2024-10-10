const Joi = require("joi");

const CourseSchema = Joi.object({
  fullCourseName: Joi.string().required(),
  shortCourseName: Joi.string().required(),
  degree: Joi.string().hex().length(24).required(),
  specialization: Joi.string().hex().length(24).required(),
}).required();

exports.CourseSchema = CourseSchema;

const UpdateCourseSchema = Joi.object({
  fullCourseName: Joi.string().optional(),
  shortCourseName: Joi.string().optional(),
  degree: Joi.string().hex().length(24).optional(),
  specialization: Joi.string().hex().length(24).optional(),
}).required();

exports.UpdateCourseSchema = UpdateCourseSchema;
