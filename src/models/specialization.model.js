
const { Schema, model, Types } = require("mongoose");

const SpecializationSchema = new Schema(
  {
    specializationName: {
      type: String,
      required: true,
    },
    eligibility: [
      {
        type: Types.ObjectId,
        ref: "Eligibility",
        required: true,
      },
    ],
    numberOfYear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Specialization = model("Specialization", SpecializationSchema);

module.exports = { Specialization };
