const { createServer } = require('http');
const { Logger } = require('../lib/logger.lib');

class AppServer {
  #server;
  #app;
  #config;

  constructor(app, config) {
    this.#app = app;
    this.#config = config.get();
  }

  static init(app, config) {
    return new AppServer(app, config);
  }

  configure(...handlers) {
    handlers.forEach((handler) => {
      this.#app.use(handler);
    });

    return this;
  }

  connectDatabase(dataSource) {
    dataSource
      .authenticate()
      .then(() => {
        Logger.info('Connection has been established successfully.');
      })
      .catch((error) => {
        Logger.error('Unable to connect to the database:', error.message);
      });

    return this;
  }

  routes(...routers) {
    routers.forEach((router) => this.#app.use(router));

    return this;
  }

  globalExceptionHandler(handler) {
    this.#app.use(handler);

    return this;
  }

  start(callback) {
    const PORT = this.#config.app.port;

    this.#server = createServer(this.#app);
    this.#server.listen(PORT, '127.0.0.1', callback);

    return this;
  }

  close(callback) {
    this.#server.close(callback);
  }
}

exports.AppServer = AppServer;
