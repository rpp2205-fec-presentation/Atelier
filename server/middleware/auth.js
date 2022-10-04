import AUTH_TOKEN from '../../config.js';

module.exports = (req, res, next) => {

  console.log('HERE I AM');
  console.log(AUTH_TOKEN);

  next();
};
