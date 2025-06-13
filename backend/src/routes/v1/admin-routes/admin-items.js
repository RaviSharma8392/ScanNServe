const express = require("express");
const { StatusCodes } = require("http-status-codes");

const adminItemRouter = express.Router();

adminItemRouter.post("/addCategory", async (req, res) => {
  try {
    const { name } = req.body;
    const category = new category({ name });
    await category.save();
    res.status(StatusCodes.OK).json({
      success: true,
      message: "added category successfully",
    });
  } catch (error) {
res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"something went wrong",
    success:false

})

  }
});

adminItemRouter.patch("/updateCategory:_id",async(req,res)=>{
    try {

            const _id=req.params.id
            

        
    } catch (error) {
        
    }

 

    


})

module.exports=adminItemRouter
