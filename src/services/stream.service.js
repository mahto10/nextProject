const { Stream } = require("../models/stream.model");
const { BaseService } = require("./base.service");

class StreamService extends BaseService {
  constructor(model) {
    super(model);
  }
}

module.exports = { StreamService: new StreamService(Stream) };
