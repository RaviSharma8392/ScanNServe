const itemRepository = require("../repositories/itemRepository")
const {StatusCodes} = require('http-status-codes');
const addMenuItemService = async (data) => {
try{
   const response = await itemRepository.create(data);
   return response;
}
catch(error){
    console.log("Add Menu Item Service Error", error);
    throw error;
}
}
const deleteMenuItemService = async (data) => {
try{
const response = await itemRepository.delete(data);
return response;
}
catch(error){
console.log("Delete Menu Item Service", error);
throw error;
}
}
const updateMenuItemService = async (data) => {
try{
const response = await itemRepository.update(data);
return response;
}
catch(error){
    console.log("Update Menu Item Service", error);
    throw error;
}
}
const toggleMenuItemService = async (data) => {
try{
    const response = await itemRepository.toggleItem(data);
    return response;
}
catch(error){
    console.log("Toggle menu service error", error);
    throw error;
}
}

module.exports = {addMenuItemService,deleteMenuItemService,updateMenuItemService,toggleMenuItemService};