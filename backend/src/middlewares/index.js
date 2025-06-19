
const adminAuth = require("./adminMiddleWare")
const controllerAuth=require("./controllerMiddelware")

module.exports={
    controllerMiddleWare:controllerAuth,
    adminMiddleWare:adminAuth

}