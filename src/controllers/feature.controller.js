const { FeatureService } = require("../services/features.service");
const BaseController = require("./base.controller");

class FeatureController extends BaseController {
  constructor() {
    super();
  }

  create() {
    return this.asyncWrapper(async (req, res) => {
      const result = await FeatureService.create(req.body);

      this.send(res, result, 201);
    });
  }
}

module.exports = { FeatureController: new FeatureController() };
