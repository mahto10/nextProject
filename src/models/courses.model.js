const { required } = require("joi");
const { Schema, model, Types } = require("mongoose");

const CoursesSchema = new Schema(
  {
    fullCourseName: {
      type: String,
      required: true,
    },
    shortCourseName: {
      type: String,
      required: true,
    },
    degree: {
      type: Types.ObjectId,
      ref: "Degree",
      required: true,
    },
 
  },
  {
    timestamps: true,
  }
);

const Course = model("Course", CoursesSchema);

module.exports = { Course };
