class AppError extends Error {
  status;
  isOperational;
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }

  static init(message, statusCode) {
    return new AppError(message, statusCode);
  }
}

module.exports = { AppError };
