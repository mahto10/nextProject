const { Schema, model, Types } = require("mongoose");

const approvalsSchema = new Schema(
  {
    approvalName: {
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

const Approvals = model("Approvals", approvalsSchema);

module.exports = { Approvals };
