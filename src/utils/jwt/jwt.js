const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

exports.generateToken = (payload, subject) => {
  const options = {
    issuer: process.env.JWT_ISSUER,
    audience: process.env.JWT_AUDIENCE,
    expiresIn: process.env.JWT_EXPIRES_IN || "1h",
    subject: subject,
    algorithm: "HS256",
  };

  return jwt.sign(payload, JWT_SECRET_KEY, options);
};

exports.verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET_KEY, { algorithms: ["HS256"] });
  } catch (err) {
    throw new Error("Invalid token");
  }
};
