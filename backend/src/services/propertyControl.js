const { StatusCodes } = require("http-status-codes")
const { userRepository } = require("../repositories")
const Property=require("../schema/propertySchema")


const addPropertyService = async(data,userId) => {
try {


const{name,admin,address,colorTheme,callingNumber,whatsappNumber,isBilled}=data
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

const updatePropertyNameService=async(data,id)=>{
    try {
console.log("updatedProperty Called in property Controlller Service")

    // const UpdatedName = await userRepository.update(id,data);
    return UpdatedName
        
    } catch (error) {
        console.log("error in updatedProperty Controlller Service"+error)

        
    }



}
module.exports = {addPropertyService,updatePropertyNameService};