require("dotenv").config();
const port = process.env.PORT;
const dbPort = process.env.DB_PORT;
const env = process.env.NODE_ENV;
const express = require("express");
// const pool = require("./config/db.config");
const { sequelize } = require("./models/studentModel");
const app = express();
app.use(express.json());

const indexRouter = require("./routes/index");
console.log(`Running in ${env} mode`);

app.use("/api/v1", indexRouter);
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ success: false, message: err.message });
});

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("Connected to the PostgreSQL database");

    // await sequelize.sync({ force: true }); use only in development
    await sequelize.sync();
    console.log("Database synchronized");

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Failed to connect to the PostgreSQL database", err);
    process.exit(1);
  }
}

startServer();
