import userModel from "../models/userModel.js";


const adminaccess = async (req, res, next) => {
    try {
        const userid = req.user._id ;
        const user = await userModel.findById(userid);
    
        if(user.role != 1){
            return res.status(401).send({success: false, message: 'Unauthorized access'});
        }else{
            next();
        } 
        
    } catch (error) {
        console.log('Error : '+error);
    }
      
}

export default adminaccess;