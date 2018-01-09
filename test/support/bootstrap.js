const { startApp } = require('codecept.app-runner');
const path         = require('path');

module.exports = function (done) {
  console.log(path.join(__dirname, 'app'))
  startApp({
    host: 'localhost',
    port: 8080,
    appCommand: 'yarn app',
    appPath: __dirname,
  }, done);
};
