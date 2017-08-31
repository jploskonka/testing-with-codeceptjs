const appManager = require('./appManager.js');

module.exports = function (done) {
  appManager.start(done);
};
