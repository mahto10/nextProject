const { Feature } = require("../models/features.model");
const { BaseService } = require("./base.service");

class FeatureService extends BaseService {
  constructor(model) {
    super(model);
  }
}

module.exports = { FeatureService: new FeatureService(Feature) };
