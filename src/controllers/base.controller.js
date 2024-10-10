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

  update() {
    return this.asyncWrapper(async (req, res) => {
      const result = await this.service.update(req.params.id, req.body);
      this.send(res, result);
    });
  }

  delete() {
    return this.asyncWrapper(async (req, res) => {
      await this.service.delete(req.params.id);
      this.send(res, { message: "Deleted successfully" }, 204);
    });
  }

  get() {
    return this.asyncWrapper(async (req, res) => {
      const result = await this.service.find(req.params.id);
      this.send(res, result);
    });
  }

  getAll() {
    return this.asyncWrapper(async (req, res) => {
      const result = await this.service.findAll();
      this.send(res, result);
    });
  }
}

module.exports = BaseController;
