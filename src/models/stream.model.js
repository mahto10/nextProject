const { Schema, model } = require("mongoose");

const StreamSchema = new Schema(
  {
    streamName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Stream = model("Stream", StreamSchema);

module.exports = { Stream };
