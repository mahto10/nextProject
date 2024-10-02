const Joi = require("joi");

const ApprovalSchema = Joi.object({
  approvalName: Joi.string().required(),
  image: Joi.string().required(),
}).required();

exports.ApprovalSchema = ApprovalSchema;
