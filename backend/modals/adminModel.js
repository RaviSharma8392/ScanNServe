const mongoose=require("mongoose")
const Schema=mongoose.Schema

const adminSchema=new Schema(

    {
        name:{type:String,


        },
        password:{
            type:String
        },
        phoneNumber:{
            type:String
        },
        email:{
            type:String
        },
        homeStayName:{

            type:String
        }


    }

)
const Admin=mongoose.model('Admin',adminSchema)