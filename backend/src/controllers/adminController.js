const {StatusCodes} = require('http-status-codes');
const {addPropertyService, addMenuItemService,deleteMenuItemService,updateMenuItemService,toggleMenuItemService} = require('../services');

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
const toggleAvl = async (req,res) =>  {
try{
// we will need property name, item name, and fieldName to toggle availability
const data = req.body;
const response = await toggleMenuItemService(data);
res.status(StatusCodes.OK).json(response);
}
catch(error){
    console.log("Toggle Availability Eror", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
}
}
const addItem = async (req,res) => {
try{
    const data = req.body;
    //name,availability,propertyId,category,pricing,itemId
const response = await addMenuItemService(data);
    res.status(StatusCodes.CREATED).json("Item successfully Added", response);
}
catch(error){
    console.log("Add Item controller error", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
}
}
const deleteItem = async (req,res) => {
try{
    const data = req.body;
const response = await deleteMenuItemService(data);
res.status(StatusCodes.OK).json(respone);
}
catch(error){
console.log("Delete Item Controller Error", error);
res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
}

}
const updateItem = async (req,res) => {
try{
    //we will need item, property name, fieldName and its new Value to update item.
    const data = req.body;
    const response = await updateMenuItemService(data);
    res.status(StatusCodes.OK).json(response);
}
catch(error){
    console.log("Update Item Controller error", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
}
}

module.exports = {
    addCategory,deleteCategory,addItem,deleteItem,updateItem,toggleAvl,addProperty,deleteProperty,updateProperty,updateItem
}

