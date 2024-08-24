const pool = require("../config/db.config");
const { ensureUsersTableExists } = require("../models/studentModel");

const studentSignUp = async (user) => {
  await ensureUsersTableExists(); // Ensure the table exists before inserting

  const { name, email, password } = user;
  const result = await pool.query(
    `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *`,
    [name, email, password]
  );
  return result.rows[0];
};

module.exports = { studentSignUp };
