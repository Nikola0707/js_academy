module.exports = (res, message, data, args = {}) => {
  res.send({
    error: false,
    message: message,
    data,
    ...args
  });
}