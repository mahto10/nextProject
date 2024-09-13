const { required } = require("joi");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const adminSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  updatedAt: {
    type: Date,
    default: Date.now,
  },

  permissions: {
    type: [String],
    enum: [
      "student management",
      "course management",
      "finance",
      "add other users",
      "same as admin",
    ],
    required: true,
  },
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = { Admin };
