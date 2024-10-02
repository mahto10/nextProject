const { FeatureService } = require("../services/features.service");
const BaseController = require("./base.controller");

class FeatureController extends BaseController {
  constructor(service) {
    super(service);
  }

  getAll() {
    return this.asyncWrapper(async (req, res) => {
      const result = await FeatureService.findAll();
      this.send(res, result, 201);
    });
  }
}

module.exports = { FeatureController: new FeatureController(FeatureService) };
