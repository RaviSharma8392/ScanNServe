const mongoose=require("mongoose")

const Schema=mongoose.Schema

const userShema=new Schema(

    {
        name:{type:String,
            
        },
        password:{
            type:String,
            unique:true
        },
        phone:{

            type:String
        },
        email:{
            type:String
        },
        hotel:{
            type:String
        },
        role:{

            type:String,
            enum:["controller","admin"]
        }

            
        
        


    }

)
const User=mongoose.model('User',userShema)
module.exports=User