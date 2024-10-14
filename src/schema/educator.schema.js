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
  // website: Joi.string().uri().required(),
  website: Joi.string().required(),
  about: Joi.string().required(),
  address: Joi.string().required(),
  city: Joi.string().required(),
  country: Joi.string().required(),
  logo: Joi.string().required(),
  gallery: Joi.array().items(Joi.string()).required().max(10),
  certificate: Joi.array().items(Joi.string()).required().max(10),
  facility: Joi.string().required(),
  course: Joi.array().items(Joi.string()).required(),
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
  course: Joi.array().items(Joi.string()),
}).required();

module.exports = { EducatorSchema, UpdateEducatorSchema };
