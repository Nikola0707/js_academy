module.exports = (res, statusCode, message, args = {}) => {
  res.status(statusCode).send({
    error: false,
    message: message,
    ...args
  });
}