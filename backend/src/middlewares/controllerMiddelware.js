const User = require("../schema/userSchema")
const jwt=require("jsonwebtoken")
require('dotenv').config();



const controllerAuth=async(req,res,next)=>{
   try {
const { token } = req.cookies;
console.log("token", token);
        if(!token){
            return res.status(401).send("token is invalid")

        }
        const tokenSecret=process.env.TOKEN_SECRET
        console.log(tokenSecret)
        const decodedToken=jwt.verify(token.token,tokenSecret)
        const _id=decodedToken._id
        console.log(_id);
        

        if(!_id){

            return res.status(401).send("invalid user id")
        }
        const user= await User.findOne({_id})
        if(!user){

            return res.send("user not found")

        }
        if(user.role!="controller"){

            return res.send("access denied only controller")
        }
        next()

        
    } catch (error) {
        console.log("error in authController"+error)
        
    }


}

module.exports=controllerAuth