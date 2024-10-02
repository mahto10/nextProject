const { EligibiltyService } = require("../services/eligibilty.service");
const BaseController = require("./base.controller");

class EligibiltyController extends BaseController {
  constructor(service) {
    super(service);
  }
}

module.exports = {
  EligibiltyController: new EligibiltyController(EligibiltyService),
};
