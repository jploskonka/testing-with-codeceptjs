const cp = require('child_process');
const tcpPortUsed = require('tcp-port-used');
const psTree = require('ps-tree');

const defaultConfig = {
  host: 'localhost',
  port: 8080,
  appPath: '../app/',
  appCommand: 'yarn run start'
};

const APP_TIMEOUT = 4000;

class AppManager {
  constructor(config) {
    this.app = null; // used to keep reference to app process
    this.config = Object.assign(defaultConfig, config);
  }

  start(callback) {
    console.log(`Starting app at: ${this.config.host}:${this.config.port}`); //eslint-disable-line no-console

    this.app = cp.exec(this.config.appCommand, { cwd: this.config.appPath });
    this.waitForApp(callback);
  }

  waitForApp(callback) {
    tcpPortUsed
      .waitUntilUsedOnHost(this.config.port, this.config.host, 500, APP_TIMEOUT)
      .then(() => {
        console.log(`Application started, running tests.`); //eslint-disable-line no-console
        callback();
      });
  }

  close() {
    psTree(this.app.pid, (err, children) => {
      cp.spawn('kill', ['-9'].concat(children.map(p => p.PID)));
    });
  }
}

const appManager = new AppManager({});

module.exports = appManager;
