const { asyncWrapper } = require('../utils/async-wrapper.utils');

class BaseController {
  asyncWrapper = asyncWrapper;
  send(res, data, statusCode = 200) {
    const response = {
      isSuccess: true,
      statusCode,
    };
    if (Array.isArray(data)) response.count = data.length;
    response.data = data;
    res.status(statusCode).json(response);
  }
}

module.exports = BaseController;
