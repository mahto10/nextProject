const { Schema, model } = require("mongoose");

const FeatureSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Feature = model("Feature", FeatureSchema);

module.exports = { Feature };
