const express = require("express");
const { config } = require("./config");
const { AppServer } = require("./bin/server");
const { Logger } = require("./lib/logger.lib");
const { V1Router } = require("./routes");
const { GlobalErrorHandler } = require("./middlewares/global-error.middleware");
const { RequestLogger } = require("./middlewares/request-logger.middleware"); // Correct import
const connectDB = require("./db/db");

process.on("uncaughtException", (err) => {
  Logger.error("Uncaught Exception! Shutting down...");
  Logger.error(err.toString());
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  Logger.error(`name: ${err.name} message: ${err.message}`);
  Logger.error("Unhandled Rejection! Shutting down...");
  server.close(() => {
    process.exit(1);
  });
});

async function main() {
  try {
    await connectDB();

    const app = express();

    const server = AppServer.init(app, config)
      .configure(express.json(), RequestLogger)
      .connectDatabase()
      .routes(V1Router)
      .globalExceptionHandler(GlobalErrorHandler.init())
      .start(() => {
        Logger.info(`listening on port: ${config.get("app").port}`);
      });
  } catch (err) {
    Logger.error("Failed to start the app:", err);
    process.exit(1);
  }
}

main();
