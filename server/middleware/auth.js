const AUTH_TOKEN = require('../../config.js');

module.exports = (req, res, next) => {
  req.headers.Authorization = AUTH_TOKEN;

  next();
};
