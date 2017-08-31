const appManager = require('./appManager.js');

module.exports = function () {
  appManager.close();
};
