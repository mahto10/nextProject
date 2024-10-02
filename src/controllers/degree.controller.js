const { DegreeService } = require("../services/degree.service");
const BaseController = require("./base.controller");

class DegreeController extends BaseController {
  constructor(service) {
    super(service);
  }
}

module.exports = { DegreeController: new DegreeController(DegreeService) };
