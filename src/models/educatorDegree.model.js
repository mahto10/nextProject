const { Schema, model, Types } = require("mongoose");

const EducatorDegreeSchema = new Schema(
  {
    degreeName: {
      type: String,
      required: true,
    },
    stream: {
      type: Types.ObjectId,
      ref: "Stream",
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

const EducatorDegree = model("EducatorDegree", EducatorDegreeSchema);

module.exports = { EducatorDegree };
