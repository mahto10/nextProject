const { Approvals } = require("../models/approvals.model");
const { BaseService } = require("./base.service");

class ApprovalService extends BaseService {
  constructor(model) {
    super(model);
  }
}

module.exports = { ApprovalService: new ApprovalService(Approvals) };
