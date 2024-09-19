const { Schema, model } = require("mongoose");

const PermissionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

const Permission = model("Permission", PermissionSchema);

module.exports = { Permission };
