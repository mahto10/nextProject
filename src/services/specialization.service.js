const { Specialization } = require("../models/specialization.model");
const { BaseService } = require("./base.service");

class SpecializationService extends BaseService {
  constructor(model) {
    super(model);
  }
}

module.exports = {
  SpecializationService: new SpecializationService(Specialization),
};
