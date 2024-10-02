const { SpecializationService } = require("../services/specialization.service");
const BaseController = require("./base.controller");

class SpecializationController extends BaseController {
  constructor(service) {
    super(service);
  }
}

module.exports = {
  SpecializationController: new SpecializationController(SpecializationService),
};
