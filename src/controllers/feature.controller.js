const { FeatureService } = require("../services/features.service");
const BaseController = require("./base.controller");

class FeatureController extends BaseController {
  constructor(service) {
    super(service);
  }
}

module.exports = { FeatureController: new FeatureController(FeatureService) };
