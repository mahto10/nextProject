const { StreamService } = require("../services/stream.service");
const BaseController = require("./base.controller");

class StreamController extends BaseController {
  constructor(service) {
    super(service);
  }
}

module.exports = { StreamController: new StreamController(StreamService) };
