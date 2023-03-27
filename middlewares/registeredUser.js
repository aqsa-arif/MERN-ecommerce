import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const jwt_SECRETKey = process.env.jwt_SECRETKey;

const registeredUser = async (req, res, next) => {
    try {
        const token = req.headers['auth-token'] ;
    
        // Only contain id because we passed only id of user to jwt.sign()
        const verifieduser =  jwt.verify(token , jwt_SECRETKey );
        // console.log(verifieduser);

        if(verifieduser){
            // so logedin valid user can be access by other middlewares or endpoints
            req.user = verifieduser;    
            next();
        }
        else{
            res.send('Invalid token');
        }
        
    } catch (error) {
        console.log('Error : '+error);
    }
}

export default registeredUser;



// {
//     "success": true,
//     "message": "Login Successfully",
//     "user": {
//       "id": "64048110d3230dcfe7a34a39",
//       "name": "aqsa",
//       "email": "aqsa@gmail.com",
//       "phoneNo": 12345,
//       "address": "Peshawar",
//       "role": 0
//     },
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDA0ODExMGQzMjMwZGNmZTdhMzRhMzkiLCJpYXQiOjE2NzgwMTk4NzUsImV4cCI6MTY3ODc5NzQ3NX0.ibmKKY8QGPXCai-xamsZ8J6uko91x2tU3uhIOllimhQ"
//   }