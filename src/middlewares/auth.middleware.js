const jwt = require("jsonwebtoken");
const { asyncWrapper } = require("../utils/async-wrapper.utils");

const authMiddleware = () =>
  asyncWrapper(async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token || !token.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Invalid Token or Token not found",
      });
    }

    const [, jwtToken] = token.split(" ");

    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

    try {
      const decodedData = jwt.verify(jwtToken, JWT_SECRET_KEY, {
        algorithms: ["HS256"],
      });

      req.user = decodedData;

      next();
    } catch (err) {
      return res.status(401).json({
        success: false,
        message: "Invalid Token or Token not found",
      });
    }
  });

module.exports = authMiddleware;
