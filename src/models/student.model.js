const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentSchema = new Schema({
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
});

// Pre-save hook to automatically update `updatedAt` field
// studentSchema.pre("save", function (next) {
//   this.updatedAt = Date.now();
//   next();
// });

// Model creation
const Student = mongoose.model("Student", studentSchema);

module.exports = { Student };
