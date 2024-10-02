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

module.exports = { EducatorSchema };
