const { userRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes");
const { createJWT } = require("../utils");
const bcrypt = require("bcrypt");

const signInService = async (data) => {
  try {
    const { email, password } = data;

    const user = await userRepository.getByEmail(email);

    if (!user) throw new Error("No registered user found with this email");

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) throw new Error("You entered an incorrect password");
    return {
      username: user.name,
      email: user.email,
      _id: user._id,
      token: createJWT({ id: user._id }),
    };
  } catch (err) {
    console.log("SignIn Service Error", err);
    throw err;
  }
};
const signOutService = async (req,res) => {
    try{
        res.clearCookie('token');
    }
    catch(err){
        console.log("SignOut service error",err);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR),json(err);
    }
};
module.exports = { signInService, signOutService };
