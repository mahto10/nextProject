const redis = require("redis");
const { Logger } = require("../lib/logger.lib");

const client = redis.createClient({
  url: `redis://${process.env.REDIS_HOST || "localhost"}:${
    process.env.REDIS_PORT || 6379
  }`,
});

client.on("error", (err) => {
  Logger.error("Redis error:", err);
});

client
  .connect()
  .then(() => {
    Logger.info("Connected to Redis");
  })
  .catch((err) => {
    Logger.error("Failed to connect to Redis:", err);
  });

module.exports = client;
