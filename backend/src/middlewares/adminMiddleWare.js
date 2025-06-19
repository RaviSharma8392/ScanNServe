const { StatusCodes } = require("http-status-codes");
const User = require("../schema/userSchema");
const jwt = require("jsonwebtoken");
const config = require("../config");

const adminAuth = async (req, res, next) => {
  try {
    // Get token from cookies
    const token = req.cookies?.token;
    console.log("Token:", token);

    if (!token) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: "Token is missing" });
    }

    // Verify token
    const decodedToken = jwt.verify(token, config.ServerConfig.JWTSecret);
    const { _id } = decodedToken;
    console.log("Decoded _id:", _id);

    if (!_id) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: "Invalid token payload" });
    }

    // Find user by ID
    const user = await User.findById(_id);
    console.log("User:", user);

    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: "User not found" });
    }

    if (user.role !== "admin") {
      return res.status(StatusCodes.FORBIDDEN).json({ message: "Access denied: Admins only" });
    }

    // Attach user to request for further use if needed
    req.user = user;

    next();
  } catch (error) {
    console.error("Admin Auth Error:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Error in adminAuth middleware",
      error: error.message
    });
  }
};

module.exports = adminAuth;
