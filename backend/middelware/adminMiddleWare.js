const User = require("../modals/userModel")
const jwt=require("jsonwebtoken")
require('dotenv').config();

const adminAuth=async(req,res,next)=>{
    try {
  const { token } = req.cookies;
        console.log(token)

        if(!token){ 
           return res.status(401).json( "token is invalid") 

            
        }
        const tokenSecret=process.env.TOKEN_SECRET
        console.log(tokenSecret)
        const decodedToken = jwt.verify(token.token,tokenSecret);
    const { _id } = decodedToken;
    console.log(_id)
    if(!_id){

        return res.status(401).json("id not found")

    }
        const user= await User.findById(_id)
    console.log(user)
    if(!user){

        return res.status(401).josn("user not found")

    }
    if(user.role!="admin"){
        return res.status(401).json("access denied only admin")
    }

    next()

        
    } catch (error) {
        res.send("error in adminMiddelware"+error)

        
    }

}
module.exports=adminAuth