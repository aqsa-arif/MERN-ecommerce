import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,  
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String  ,
        require: true, 
    },
    phoneNo: {
        type:  Number , 
    },
    address: {
        type: String ,  
    },
    answer: {
        type: String
    }    ,
    role: {
        type: Number,
        default: 0 
    }
})

const userModel = mongoose.model('users', userSchema);

export default userModel;