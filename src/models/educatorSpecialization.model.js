const { Schema, model, Types } = require("mongoose");

const EducatorSpecializationSchema = new Schema(
  {
    specializationName: {
      type: String,
      required: true,
    },
    courses: {
      type: Types.ObjectId,
      ref: "Course",
      required: true,
    },

    numberOfYear: {
      type: Number,
      required: true,
    },
    fees: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    eligibility: [
      {
        type: Types.ObjectId,
        ref: "Eligibilty",
        required: true,
      },
    ],
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

const EducatorSpecialization = model(
  "EducatorSpecialization",
  EducatorSpecializationSchema
);

module.exports = { EducatorSpecialization };
