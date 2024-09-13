const redis = require("redis");

const client = redis.createClient({
  url: `redis://${process.env.REDIS_HOST || "localhost"}:${
    process.env.REDIS_PORT || 6379
  }`,
});

client.on("error", (err) => {
  console.error("Redis error:", err);
});

// client.connect().catch(console.error);
client
  .connect()
  .then(() => {
    console.log("Connected to Redis");
  })
  .catch((err) => {
    console.error("Failed to connect to Redis:", err);
  });

module.exports = client;
