const mongoose = require("mongoose");
const { Logger } = require("../lib/logger.lib");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    Logger.info("MongoDB connected successfully");
  } catch (err) {
    Logger.error("Error in database connection:", err);
    process.exit(1); // Exit if connection fails
  }
};

module.exports = connectDB;
