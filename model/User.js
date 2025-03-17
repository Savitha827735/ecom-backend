const mongoose=require('mongoose');

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        require:true
    },

    token:{
        type:String,
        require:true
    },
    role:{
        type:String,
        default:"user"
    },
    cart:{
        type:mongoose.Schema.ObjectId,
        ref:'Cart'
    }

})

const User=mongoose.model("User",userSchema)
module.exports={User};