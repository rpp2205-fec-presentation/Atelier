var path = require("path");
var SRC_DIR = path.join(__dirname, "/client/src");

module.exports = {
  roots: ['./test'],
  testMatch: ['**/*.test.(js|jsx)'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  moduleFileExtensions: ['jsx', 'js', 'json'],
  moduleDirectories: ['node_modules', 'src']
};
