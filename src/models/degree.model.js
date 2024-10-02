const { Schema, model, Types } = require("mongoose");

const DegreeSchema = new Schema(
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
  },
  {
    timestamps: true,
  }
);

const Degree = model("Degree", DegreeSchema);

module.exports = { Degree };
