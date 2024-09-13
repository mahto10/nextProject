const bcrypt = require("bcrypt");
const crypto = require("crypto");

const SALT_ROUNDS = 10;

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

const comparePassword = async (plainPassword, hashedPassword) => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};

const generateRandomNumber = (size) => {
  const randomNumber = Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(size, "0");

  return randomNumber;
};

const generateHashFromString = (string) => {
  return crypto.createHash("sha256").update(string).digest("hex");
};
const generateRandomString = () => {
  return crypto.randomBytes(3).toString("hex");
};

module.exports = {
  hashPassword,
  comparePassword,
  generateRandomNumber,
  generateHashFromString,
  generateRandomString,
};
