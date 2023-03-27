import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

dotenv.config();
const jwt_SECRETKey = process.env.jwt_SECRETKey;

const loginController = async (req, res) => {
    const { email, password } = req.body;

    if (!email) {
        return res.send({ success: false, message: 'Email is required' })
    }
    if (!password) {
        return res.send({ success: false, message: 'Password is required' })
    }

    try {
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.send({ success: false, message: 'Invalid email' })
        }

        const comparePassword = await bcrypt.compare(password, user.password); 
        if (!comparePassword) {
            return res.send({ success: false, message: 'Invalid Password' })
        }

        const token = jwt.sign({ _id: user._id }, jwt_SECRETKey, { expiresIn: '9d' });

        res.send({
            success: true,
            message: 'Login Successfully',
            user:{
               id: user._id,
               name: user.name,
               email: user.email,
               phoneNo: user.phoneNo,
               address: user.address,
               role: user.role
            },
            token
        })

    } catch (error) {
        console.log(error);
        res.send({
            success: false,
            message: 'Something went wrong, Please try again',
            error
        })
    }

}

export default loginController;