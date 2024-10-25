const Joi = require("joi");

const EducatorSchema = Joi.object({
  educatorType: Joi.array()
    .items(
      Joi.string().valid(
        "School",
        "College",
        "University",
        "Coaching",
        "Distance/Online-Education"
      )
    )
    .required(),
  fullName: Joi.string().required(),
  shortName: Joi.string().required(),
  estbYear: Joi.string().required(),
  affiliatedBy: Joi.array().items(Joi.string().required()).required(),
  mobileNumber: Joi.string().required(),
  email: Joi.string().email().required(),
  website: Joi.string().required(),
  about: Joi.string().required(),
  address: Joi.string().required(),
  city: Joi.string().required(),
  country: Joi.string().required(),
  logo: Joi.string().required(),
  gallery: Joi.array().items(Joi.string()).max(10).required(),
  certificate: Joi.array().items(Joi.string()).max(10).required(),
  facility: Joi.array().items(Joi.string().required()).required(),

  streams: Joi.array()
    .items(
      Joi.object({
        streamName: Joi.string().required(),
      })
    )
    .required(),

  degrees: Joi.array()
    .items(
      Joi.object({
        degreeName: Joi.string().required(),
        stream: Joi.array().items(Joi.string().required()).required(),
      })
    )
    .required(),

  courses: Joi.array()
    .items(
      Joi.object({
        fullCourseName: Joi.string().required(),
        shortCourseName: Joi.string().required(),
        degree: Joi.array().items(Joi.string().required()).required(),
      })
    )
    .required(),

  specializations: Joi.array()
    .items(
      Joi.object({
        specializationName: Joi.string().required(),
        courses: Joi.string().required(),
        numberOfYear: Joi.number().required(),
        fees: Joi.string().required(),
        description: Joi.string().required(),
        eligibility: Joi.array().items(Joi.string().required()).required(),
      })
    )
    .required(),
}).required();

const UpdateEducatorSchema = Joi.object({
  educatorType: Joi.array().items(
    Joi.string().valid(
      "School",
      "College",
      "University",
      "Coaching",
      "Distance/Online-Education"
    )
  ),
  fullName: Joi.string(),
  shortName: Joi.string(),
  estbYear: Joi.string(),
  affiliatedBy: Joi.array().items(Joi.string()),
  mobileNumber: Joi.string(),
  email: Joi.string().email(),
  website: Joi.string(),
  about: Joi.string(),
  address: Joi.string(),
  city: Joi.string(),
  country: Joi.string(),
  logo: Joi.string(),
  gallery: Joi.array().items(Joi.string()).max(10),
  certificate: Joi.array().items(Joi.string()).max(10),
  facility: Joi.string(),
}).required();

module.exports = { EducatorSchema, UpdateEducatorSchema };
