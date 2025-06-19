const { StatusCodes } = require("http-status-codes")
const { userRepository, propertyRepository } = require("../repositories")
const Property=require("../schema/propertySchema")

// add property

const addPropertyService = async(data,userId) => {
try {


const{name,address,colorTheme,callingNumber,whatsappNumber,isBilled}=data
if(!userId){

    console.log("error in addProperty")
    throw new Error("userId is not exist")
}
const newProperty=new Property({name,admin:userId,address,colorTheme,callingNumber,whatsappNumber,isBilled

})
await newProperty.save()
console.log("addProperty Service called")

return newProperty
    
} catch (error) {
    console.log("error in addProperty Service "+error)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    
}
 

}

// update property name using property id

const updatePropertyService=async(data,_id)=>{
    try {
console.log("updateProperty called in PropertyController service");
    const updatedProperty = await propertyRepository.update(_id,data);
    return updatedProperty
        
    } catch (error) {
        console.log("error in updatedProperty Service"+error)

        
    }



}

// delete proprty using property id

const deletePropertyService=async(_id)=>{
    try {
        const deleteProp=await propertyRepository.delete(_id)
        console.log("deleted property service called")
        return deleteProp
        
    } catch (error) {
        console.log("error in deleted property service"+" "+error)
        
    }



}





module.exports = {addPropertyService,updatePropertyService,deletePropertyService};