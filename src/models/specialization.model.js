const { Schema, model, Types } = require("mongoose");

const SpecializationSchema = new Schema(
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
  },
  {
    timestamps: true,
  }
);

const Specialization = model("Specialization", SpecializationSchema);

module.exports = { Specialization };
