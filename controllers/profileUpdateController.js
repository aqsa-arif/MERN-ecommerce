import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt';

const profileUpdateController = async (req, res) => { 
    const {name, password, phoneNo, address } = req.body ;
    try {   
        const logedinUser = await userModel.findById(req.user._id);

        if(password && password.length < 6){
            return res.send({success: false, message: "Password must be at least 6 characters long." })
        }

        const hashedpassword = password ? await bcrypt.hash(password, 10) : undefined ;
 
        const updatedUser = await userModel.findByIdAndUpdate(
            req.user._id ,
            { 
                name: name || logedinUser.name,
                password:  hashedpassword || logedinUser.password,
                address: address || logedinUser.address,
                phoneNo: phoneNo || logedinUser.phoneNo, 
            }, 
            {new: true}
        ).select('-password')

        res.send({
            success: true,
            message: "Profile Updated Successfully",
            updatedUser
        });
    
    } catch (error) {
        res.send({
            success:  false,
            message: "Something went wrong, Please try again",
            error
        })
    }

}
export default profileUpdateController;

 