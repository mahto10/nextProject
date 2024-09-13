const jwt = require("jsonwebtoken");
const TokenTypesEnum = require("../enum/tokenEnum")
const dotenv = require("dotenv");

dotenv.config();

const privateKey = process.env.JWT_PRIVATE_KEY.replace(/\\n/g, "\n");
const publicKey = process.env.JWT_PUBLIC_KEY.replace(/\\n/g, "\n");

exports.generateToken = (payload, subject = TokenTypesEnum) => {
  const options = {
    issuer: process.env.JWT_ISSUER,
    audience: process.env.JWT_AUDIENCE,
    expiresIn: process.env.JWT_EXPIRES_IN || "1h",
    subject: subject, 
    algorithm: "RS256",
  };

  return jwt.sign(payload, privateKey, options);
};

exports.verifyToken = (token) => {
  try {
    return jwt.verify(token, publicKey, { algorithms: ["RS256"] });
  } catch (err) {
    throw new Error("Invalid token");
  }
};
