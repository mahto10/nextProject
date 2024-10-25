const { Schema, model, Types } = require("mongoose");

const EducatorStreamSchema = new Schema(
  {
    streamName: {
      type: String,
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

const EducatorStream = model("EducatorStream", EducatorStreamSchema);

module.exports = { EducatorStream };
