const { Schema, model, Types } = require("mongoose");

const eligibiltSchema = new Schema(
  {
    eligibiltyName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Eligibilty = model("Eligibilty", eligibiltSchema);

module.exports = { Eligibilty };
