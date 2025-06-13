
const adminAuth = require("./adminMiddleWare")
const controllerAuth=require("./controllerMiddelware")

module.exports={
    controllerMiddelWare:controllerAuth,
    adminMiddelWare:adminAuth

}