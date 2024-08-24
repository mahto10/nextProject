const pool = require("../config/db.config");

const ensureUsersTableExists = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
  } catch (error) {
    console.error("Error ensuring users table:", error.message);
    throw error;
  }
};

ensureUsersTableExists();

module.exports = { ensureUsersTableExists };
