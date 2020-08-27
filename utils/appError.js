class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.status =
      statusCode >= 400 && statusCode < 500 && `${statusCode}`.startsWith('4')
        ? 'fail'
        : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
