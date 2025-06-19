const { StatusCodes } = require("http-status-codes");
const User = require("../schema/userSchema");
const jwt = require("jsonwebtoken");
const config = require("../config");

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    console.log(token);

    if (!token) {
      return res.status(401).json("token is invalid");
    }
    const tokenSecret = config.ServerConfig.JWTSecret;
    console.log(tokenSecret);
    const decodedToken = jwt.verify(token, tokenSecret);
    const { id } = decodedToken;
    if (!id) {
      return res.status(401).json("id not found");
    }
    const user = await User.findById(id);
    console.log(user);
    if (!user) {
      return res.status(401).josn("user not found");
    }
    if (user.role != "admin") {
      return res.status(401).json("access denied only admin");
    }

    next();
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Error in adminMiddleware",
      error: error.message,
    });
  }
};
module.exports = adminAuth;
