const express = require('express');

const { config } = require('./config');
const { AppServer } = require('./bin/server');
const { Logger } = require('./lib/logger.lib');
const { dataSource } = require('./db/db');
const { V1Router } = require('./routes');
const { GlobalErrorHandler } = require('./middlewares/global-error.middleware');
const { RequestLogger } = require('./middlewares/request-logger.middleware');

process.on('uncaughtException', (err) => {
  Logger.info('Uncaught Exception! Shutting down...');
  Logger.info(err.toString());
  process.exit(1);
});

function main() {
  const app = express();

  const server = AppServer.init(app, config)
    .configure(express.json(), RequestLogger)
    .connectDatabase(dataSource)
    .routes(V1Router)
    .globalExceptionHandler(GlobalErrorHandler.init())
    .start(() => {
      Logger.info(`listening on port: ${config.get('app').port}`);
    });

  process.on('unhandledRejection', (err) => {
    Logger.info(`name: ${err.name} message: ${err.message}`);
    Logger.info('Unhandled Rejection! Shutting down...');
    server.close(() => {
      process.exit(1);
    });
  });
}

main();
