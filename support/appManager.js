const cp = require('child_process');
const tcpPortUsed = require('tcp-port-used');
const psTree = require('ps-tree');

const defaultConfig = {
  host: 'localhost',
  port: 8080,
  appPath: './vanillajs/',
  appCommand: 'yarn run start'
};

const APP_TIMEOUT = 4000;

class AppManager {
  constructor(config) {
    this._app = null; // used to keep reference to app process
    this.config = Object.assign(defaultConfig, config);
  }

  get command() { return `${this.config.appCommand}` }
  get host()    { return this.config.host }
  get port()    { return this.config.port }

  start(callback) {
    console.log(`Starting app at: ${this.host}:${this.port}`);

    this._app = cp.exec(this.command, { cwd: this.config.appPath });
    this._waitForApp(callback);
  }

  _waitForApp(callback) {
    tcpPortUsed
      .waitUntilUsedOnHost(this.port, this.host, 500, APP_TIMEOUT)
      .then(() => {
        console.log(`Application started, running tests.`);
        callback();
      }, err => {
        console.error(err);
      });
  }

  close() {
    psTree(this._app.pid, (err, children) => {
      cp.spawn('kill', ['-9'].concat(children.map(p => p.PID)))
    });
  }
}

const appManager = new AppManager({});

module.exports = appManager;
