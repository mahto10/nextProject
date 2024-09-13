const { createServer } = require("http");
const { Logger } = require("../lib/logger.lib");

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
    this.#server.listen(PORT, "127.0.0.1", callback);

    Logger.info(`Server is listening on port ${PORT}`);

    return this;
  }

  close(callback) {
    if (this.#server) {
      this.#server.close(callback);
    } else {
      callback();
    }
  }
}

exports.AppServer = AppServer;
