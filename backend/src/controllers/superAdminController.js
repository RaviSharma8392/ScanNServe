
const signUpService = require('../services/signUpService');
const createAdmin = async (req,res) => {
try{
console.log("create admin called!!");
const data = req.body;
const user = await signUpService(data);
 return res
      .json({user: user, message: "User created successfully!"});
}
catch(error){

}
}
const deleteAdmin = (req,res) => {

}
const disableAdmin = (req,res) => {

}
const rechargeAdmin = (req,res) => {

}
module.exports = {createAdmin,deleteAdmin,disableAdmin,rechargeAdmin}