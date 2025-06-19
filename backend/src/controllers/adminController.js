const { StatusCodes } = require("http-status-codes");
const { userRepository } = require("../repositories");
const { updatePropertyNameService, deletePropertyService, addPropertyService } = require("../services/propertyControl");
const { addCatService } = require("../services/category");



const addProperty = async (req, res) => {
  const { token } = req.cookies;
  const userId = await userRepository.getByToken(token);
  console.log(userId);
  const data = req.body;
  console.log(data);
  try {
    const Property = await addPropertyService(data, userId);
    console.log("admin controller call");

    return res.status(StatusCodes.CREATED).json(Property);
  } catch (error) {
    console.log("error in admin controller add propery" + error);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};
const updatePropertyName = async (req, res) => {
  try {
    const _id = req.params.id;
    console.log(_id);

    const data = req.body;
    console.log(data);

    const UpdatedName = await updatePropertyNameService(data, _id);
    return res.status(StatusCodes.OK).json({
      message: "property name changed successfully",
      UpdatedName,
    });
  } catch (error) {
    console.log("error in admin controller" +" " +error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "something went wrong",
      error,
    });
  }
};

// delete Property by id
const deleteProperty = async(req,res) => {

try {
        const _id=req.params.id
        console.log(_id)
        if(!_id){
            console.log("Property ID does not exist")
            throw new Error("Property ID does not exist")


        }
        const deletedProperty=await deletePropertyService(_id)
        return res.status(StatusCodes.OK).json(

            {
                success:true,
                message:"Property Deleted Successfully",

            }
        )

    
} catch (error) {
    console.log("error in admin controller deleted property"+" "+error)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({

          success: false,
          error:" Something went Wrong"

    }

    )
    
}

};
// update Property by id
const updateProperty = () => {};



// add Category
const addCategory = async(req, res) => {
    try {
        console.log("Calling addCategory ")
  const { token } = req.cookies;
        console.log(token)
    if(!token){

        console.log("token does not exist")

    }
    const addCat=await addCatService(data, token)

return res.status(StatusCodes.OK).json({
success:true,
    message:"Category Created SuccessFully",
    addCat

})


        
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(

            {

                status:false,
                error:" Something  Went Wrong  "
            }
        )
        
    }
    
   

};

// delete Category
const deleteCategory = (req, res) => {};
const toggleAvl = async (req, res) => {
  try {
    // we will need property name, item name, and fieldName to toggle availability
    const data = req.body;
    const response = await toggleMenuItemService(data);
    res.status(StatusCodes.OK).json(response);
  } catch (error) {
    console.log("Toggle Availability Eror", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};
const addItem = async (req, res) => {
  try {
    const data = req.body;
    //name,availability,propertyId,category,pricing,itemId
    const response = await addMenuItemService(data);
    res.status(StatusCodes.CREATED).json("Item successfully Added", response);
  } catch (error) {
    console.log("Add Item controller error", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};
const deleteItem = async (req, res) => {
  try {
    const data = req.body;
    const response = await deleteMenuItemService(data);
    res.status(StatusCodes.OK).json(respone);
  } catch (error) {
    console.log("Delete Item Controller Error", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};

module.exports = {
  addCategory,
  updatePropertyName,
  deleteCategory,
  addItem,
  deleteItem,
  toggleAvl,
  addProperty,
  deleteProperty,
  updateProperty,
};
