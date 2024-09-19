const { asyncWrapper } = require("../utils/async-wrapper.utils");

class BaseController {
  constructor(service) {
    this.service = service;
    this.asyncWrapper = asyncWrapper;
  }

  send(res, data, statusCode = 200) {
    const response = {
      isSuccess: true,
      statusCode,
    };
    if (Array.isArray(data)) response.count = data.length;
    response.data = data;
    res.status(statusCode).json(response);
  }

  create() {
    return this.asyncWrapper(async (req, res) => {
      const result = await this.service.create(req.body);

      this.send(res, result, 201);
    });
  }
}

module.exports = BaseController;
