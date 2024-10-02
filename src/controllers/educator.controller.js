const { EducatorService } = require("../services/educator.service");
const BaseController = require("./base.controller");

class EducatorController extends BaseController {
  constructor(service) {
    super(service);
  }
}

module.exports = {
  EducatorController: new EducatorController(EducatorService),
};
