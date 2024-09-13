require("dotenv").config();

module.exports = {
  app: {
    env: process.env.NODE_ENV || "development",
    port: process.env.PORT || 3000,
  },
  db: {
    uri: process.env.MONGODB_URI || "mongodb://localhost:27017/admission_26",
  },
};
