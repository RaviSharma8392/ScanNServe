const { StatusCodes } = require("http-status-codes");
const { signInService, signOutService } = require("../services");
const signIn = async (req, res) => {
  try {
    const data = req.body;
    const response = await signInService(data);
    res.cookie("token", response.token);
    res.status(StatusCodes.OK).json(response, "User signed In Successfully!");
  } catch (err) {
    console.log("User controller error", err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};
const signOut = async (req, res) => {
  try {
    await signOutService(req, res);
    res.status(StatusCodes.OK).json("User signed out successfully!");
  } catch (err) {
    console.log("User controller error", err);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json("Something went wrong during logout!");
  }
};
const getMenu = (req, res) => {
  try {
  } catch (err) {}
};
module.exports = { signIn, getMenu, signOut };
