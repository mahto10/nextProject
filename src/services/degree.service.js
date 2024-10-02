const { Degree } = require("../models/degree.model");
const { BaseService } = require("./base.service");

class DegreeService extends BaseService {
  constructor(model) {
    super(model);
  }
}

module.exports = { DegreeService: new DegreeService(Degree) };
