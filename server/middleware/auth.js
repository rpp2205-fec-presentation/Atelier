var AUTH_TOKEN = require('../../config.js');

module.exports = (req, res, next) => {

  console.log('IN Auth');
  req.headers.Authentication = AUTH_TOKEN;

  next();
};
