import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt';

const singupController = async (req, res) => { 
   const {name, email, password, phoneNo, address, answer} = req.body;

   if(!name){
     return res.send({
        success: false,
        message: 'Enter a valid name'
     })
   }
   if(!email){
     return res.send({
        success: false,
        message: 'Enter a valid email'
     })
   }
   if(!password){
     return res.send({
        success: false,
        message: 'Enter a valid password'
     })
   }
   if(!phoneNo){
     return res.send({
        success: false,
        message: 'Enter a valid Phone No'
     })
   }
   if(!address){
     return res.send({
        success: false,
        message: 'Enter a valid address'
     })
   }

   if(!answer){
     return res.send({
        success: false,
        message: 'Enter a valid Answer'
     })
   }

   try {
    //    Make email unique
   const existinguser = await userModel.findOne({email});
   if(existinguser){
      return res.send({success: false, message: "Email already exists" })
   }

   const salt = await bcrypt.genSalt(10);
   const hashPassword = await bcrypt.hash(password, salt);

   const user =  new userModel({
     name, email, phoneNo, address, answer, password: hashPassword
   })
   const result = await user.save()

   res.send({
    success: true,
    message: 'Register Successfully'
   })
    
   } catch (error) {
    res.status(500).send({
        success: true,
        message: 'Something went wrong,Please try again',
        error
       })
    
   }
   
}

export default singupController;