const { Eligibilty } = require("../models/eligibility.model");
const { BaseService } = require("./base.service");

class EligibiltyService extends BaseService {
  constructor(model) {
    super(model);
  }
}

module.exports = { EligibiltyService: new EligibiltyService(Eligibilty) };
