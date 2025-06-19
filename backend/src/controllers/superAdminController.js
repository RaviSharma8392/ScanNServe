const { StatusCodes } = require("http-status-codes");
const {signUpService }= require("../services");
const createAdmin = async (req, res) => {
  try {
    const data = req.body;
    const user = await signUpService(data);
    return res
      .status(StatusCodes.CREATED)
      .json({ user, message: "User created successfully!" });
  } catch (error) {
    console.log("Super-Admin controller error", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
const deleteAdmin = (req, res) => {};
const disableAdmin = (req, res) => {};
const rechargeAdmin = (req, res) => {};
module.exports = { createAdmin, deleteAdmin, disableAdmin, rechargeAdmin };
