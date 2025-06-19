const {StatusCodes} = require('http-status-codes');
const {addPropertyService} = require('../services');


const addProperty = async (req,res) => {
    // name,address,colorTheme,callingNumber,whatsappNumber
try{
    const data = req.body;
    const token = req.cookies.token;
const response = await addPropertyService(data,token);
res.status(StatusCodes.CREATED).json(response,"Propery added successfully!");
}
catch(eror){
    console.log("Add property controller error", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("Error", error);
}
}
const deleteProperty = (req,res) => {

}
const updateProperty = (req,res) => {

}
const addCategory = (req,res) => {

}
const deleteCategory = (req,res) => {
 
}
const toggleAvl = (req,res) =>  {

}
const addItem = (req,res) => {
    

}
const deleteItem = (req,res) => {

}
const renameItem = (req,res) => {

}
const updateItem = (req,res) => {

}
module.exports = {
    addCategory,deleteCategory,addItem,deleteItem,updateItem,toggleAvl,addProperty,deleteProperty,updateProperty,renameItem
}

