

const express=require("express")
const controllerAuth = require("../middelware/controller")
const User = require("../modals/userModel")
const controllerRoute=express.Router()
controllerRoute.use(controllerAuth)

controllerRoute.get("/data",async (req,res)=>{
    try {
        console.log("hello!");
        const data= await User.find()
        console.log(data)
res.send({message:"data fetched successfully",
    data:data
})
        
    } catch (error) {
        res.send(error)
        
    }
    

})


module.exports=controllerRoute