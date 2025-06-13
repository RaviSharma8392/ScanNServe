 const bcrypt = require("bcrypt");
 const User = require("../models/user-model");
 const jwt = require("jsonwebtoken");
 const tokenSecret = process.env.TOKEN_SECRET;
 require("dotenv").config();


 const login=async (req, res) => {
  try {
    const { email, password } = req.body;
    cpnsole.log(req.body)

    const user = await User.findOne({ email });
    if (!email) {
      res.status(401).json("user not found");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(401).json("user not found");
    }
    const token = jwt.sign({ _id: user._id ,role:user.role}, tokenSecret);
    console.log(token);
    res.cookie("token", token, { httpOnly: true });

    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
}
const signup=async (req, res) => {
  try {
    const { name, password,phone,email, hotel,role, } = req.body;

    if (!password) {
      return res.status(400).json("Password is required");
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
     name, password:hashedPassword,phone,email, hotel,role,
    });

    await newUser.save();
    res.status(201).json("User created successfully");

  } catch (error) {
    console.error("Signup error:", error);
    res.status(400).json("User not created");
  }
}
module.exports={login,signup}