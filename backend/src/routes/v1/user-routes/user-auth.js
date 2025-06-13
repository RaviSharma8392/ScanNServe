const express = require("express");
const userRouter = express.Router();
const {ControllerAuth}=require("../../../controllers")
 


userRouter.post("/login",ControllerAuth.login);

userRouter.post('/signup',ControllerAuth.signup );

module.exports =  userRouter ;
