const { Schema, model, Types } = require("mongoose");

const EducatorCourseSchema = new Schema(
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
    educator: {
      type: Types.ObjectId,
      ref: "Educator",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const EducatorCourse = model("EducatorCourse", EducatorCourseSchema);

module.exports = { EducatorCourse };
