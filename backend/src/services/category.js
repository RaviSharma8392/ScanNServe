const Category=require("../schema/categorySchema")
const addCatService=async(data,token)=>{
    try {
        console.log("Calling category service...")
        const adminId=await userRepository.getByToken(token)
        console.log(adminId)


        const newCategory= new Category({data,admin:adminId


        })
        console.log("new category created successfully")
        return newCategory
        
    } catch (error) {
        console.log("error in category service"+" "+error)
        
    }}

    module.exports={addCatService

    }