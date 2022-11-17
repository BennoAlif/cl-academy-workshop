module.exports = (res, statusCode, message, data) => res
  .status(statusCode)
  .json({
    code: statusCode,
    message,
    data,
  })
  .end();
