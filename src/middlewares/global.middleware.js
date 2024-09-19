const jwt = require("jsonwebtoken");
const { asyncWrapper } = require("../utils/async-wrapper.utils");
const { AppError } = require("../utils/app-error.utils");
const { Admin } = require("../models/admin.model");

class GlobalMiddleware {
  constructor() {}

  adminAuth() {
    return asyncWrapper(async (req, _, next) => {
      const token = req.headers.authorization || req.headers["authorization"];

      if (!token || !token.startsWith("Bearer "))
        throw new AppError("Invalid credentials", 401);

      const jwtToken = token.split(" ")[1];

      const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

      const decodedData = jwt.verify(jwtToken, JWT_SECRET_KEY);

      const admin = await Admin.findById(decodedData.id).lean();

      if (!admin) throw new AppError("User not found", 401);

      req.admin = admin;

      next();
    });
  }

  permission(...permissions) {
    return asyncWrapper(async (req, _, next) => {
      const permissionSet = new Set(req.admin.permissions);

      if (permissionSet.has("All")) return next();

      permissions.forEach((permission) => {
        if (!permissionSet.has(permission))
          throw new AppError("Not enough permissions to access this route");
      });

      next();
    });
  }
}

module.exports = { GlobalMiddleware: new GlobalMiddleware() };
