const { Schema, model, Types } = require("mongoose");

const EducatorSchema = new Schema(
  {
    educatorType: {
      type: [String],
      enum: [
        "School",
        "College",
        "University",
        "Coaching",
        "Distance/Online-Education",
      ],
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    shortName: {
      type: String,
      required: true,
    },
    estbYear: {
      type: String,
      required: true,
    },
    affiliatedBy: [
      {
        type: Types.ObjectId,
        ref: "Approvals",
        required: true,
      },
    ],
    mobileNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    gallery: [
      {
        type: String,
      },
    ],
    certificate: [
      {
        type: String,
      },
    ],
    facility: [
      {
        type: Types.ObjectId,
        ref: "Feature",
        required: true,
      },
    ],
    admin: {
      type: Types.ObjectId,
      ref: "Admin",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

EducatorSchema.path("gallery").validate(function (value) {
  return value.length <= 10;
}, "Gallery can contain a maximum of 10 items.");

EducatorSchema.path("certificate").validate(function (value) {
  return value.length <= 10;
}, "Certificate can contain a maximum of 10 items.");

const Educator = model("Educator", EducatorSchema);

module.exports = { Educator };
