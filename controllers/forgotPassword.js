import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt';

const forgotPassword = async (req, res) => {
    const { email, password, answer } = req.body;

    if (!email) {
        return res.send({ success: false, message: 'Email is required' })
    }
    if (!answer) {
        return res.send({ success: false, message: 'Answer is required' })
    }
    if (!password) {
        return res.send({ success: false, message: 'New Password is required' })
    }

    try {
        const existinguser = await userModel.findOne({ email, answer });
        if (!existinguser) {
           return  res.status(401).send(`Email or Answer is wrong`)
        }

        const hashPassword = await bcrypt.hash(password, 10);
        await userModel.findByIdAndUpdate(existinguser._id, {
            password: hashPassword
        })

        res.send({
            success: true,
            message: 'Password Updated Successfully'
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Something went wrong, Please try again'
        })
    }

}

export default forgotPassword;