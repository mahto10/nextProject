const Joi = require("joi");

const ApprovalSchema = Joi.object({
  approvalName: Joi.string().required(),
  image: Joi.string().required(),
}).required();

const UpdateApprovalSchema = Joi.object({
  approvalName: Joi.string().optional(),
  image: Joi.string().optional(),
}).required();

module.exports = {
  ApprovalSchema,
  UpdateApprovalSchema,
};
