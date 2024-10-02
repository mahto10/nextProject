const { Educator } = require("../models/educator.model");
const { BaseService } = require("./base.service");

class EducatorService extends BaseService {
  constructor(model) {
    super(model);
  }
}

module.exports = { EducatorService: new EducatorService(Educator) };
