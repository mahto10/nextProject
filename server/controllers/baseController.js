const asyncWrapper = require("../utils/asyncWrapper");

class BaseController {
  constructor() {
    this.asyncWrapper = asyncWrapper;
  }
}

module.exports = BaseController;
