const { AppError } = require('../utils/app-error.utils');
const { config } = require('../config');

class GlobalErrorHandler {
  static init() {
    return new GlobalErrorHandler().handle();
  }

  handleJWTExpiredError() {
    return new AppError('Token expired. Please login again', 401);
  }

  handleJWTError() {
    return new AppError('Invalid Token. Please login again', 401);
  }

  handleSequelizeUniqueConstraintError(error) {
    const messages = error.errors.map((err) => err.message);
    return new AppError(messages, 400);
  }

  sendErrorDev = (err, res) => {
    res.status(err.statusCode).json({
      success: false,
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  };

  sendErrorProd(err, res) {
    if (err.isOperational) {
      return res.status(err.statusCode).json({
        success: false,
        status: err.status,
        message: err.message,
      });
    }
    res.status(500).json({
      success: false,
      status: 'error',
      message: 'Something went wrong',
    });
  }

  handle() {
    return (err, _, res, __) => {
      err.statusCode = err.statusCode || 500;
      err.status = err.status || 'error';

      let error = { ...err };
      error.message = err.message;
      if (error.name === 'JsonWebTokenError') error = this.handleJWTError();
      if (error.name === 'TokenExpiredError') error = this.handleJWTExpiredError();
      if (error.name === 'SequelizeUniqueConstraintError')
        error = this.handleSequelizeUniqueConstraintError(error);

      if (config.get('app').env !== 'production') {
        return this.sendErrorDev(error, res);
      }
      this.sendErrorProd(error, res);
    };
  }
}

module.exports = { GlobalErrorHandler };
