const { StatusCodes } = require("http-status-codes")
const propertyControl = require("../services")
const {userRepository} = require('../repositories');
const { updatePropertyNameService } = require("../services/propertyControl");
const addProperty = async(req,res) => {
    const {token}=req.cookies
    const userId = await userRepository.getByToken(token);
    console.log(userId)
    const data =req.body
    console.log(data)
    try {    
        const Property=await propertyControl.addPropertyService(data,userId)
                console.log("admin controller call")

        return res.status(StatusCodes.CREATED).json(Property)


        
    } catch (error) {
        console.log("error in admin controller add propery"+error)

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)
    }






}
const updatePropertyName=async(req,res)=>{
    try {
        const id=req.params
        console.log(id)

        const data=req.body
        console.log(data)

        const UpdatedName=await updatePropertyNameService(data,id)
        return res.status(StatusCodes.OK).json({
            message:"property name changed successfully",UpdatedName
        }
            
        )
        
    } catch (error) {
        console.log("error in admin controller"+error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message:"something went wrong",error
        })
        
    }



}
const deleteProperty = () => {

}
const updateProperty = () => {


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
    addCategory,updatePropertyName,deleteCategory,addItem,deleteItem,updateItem,toggleAvl,addProperty,deleteProperty,updateProperty,renameItem
}

