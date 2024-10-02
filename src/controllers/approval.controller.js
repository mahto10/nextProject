const { ApprovalService } = require("../services/approval.service");
const BaseController = require("./base.controller");

class ApprovalController extends BaseController {
  constructor(service) {
    super(service);
  }
}

module.exports = {
  ApprovalController: new ApprovalController(ApprovalService),
};
