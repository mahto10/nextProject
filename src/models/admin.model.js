const mongoose = require("mongoose");
const { Schema } = mongoose;

const adminSchema = new Schema(
  {
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

    permissions: {
      type: [String],
      enum: [
        "Student_Management",
        "Course_Management",
        "Finance",
        "Add_Other_User",
        "All",
      ],
      required: true,
    },
  },
  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

const Admin = mongoose.model("Admin", adminSchema);

module.exports = { Admin };
