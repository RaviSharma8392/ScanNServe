

const express=require("express")
const adminAuth = require("../middelware/adminMiddleWare")
const User = require("../modals/userModel")
const adminRoute=express.Router()
adminRoute.use(adminAuth)

adminRoute.get("/data",async(req,res)=>{
    
    console.log("admin route called")
try { const data=await User.find()
    res.send({message:"data fetched successfully",data:data})
    
} catch (error) {
    res.send(error)
    console.log(error)
    
}
    
})
module.exports=adminRoute