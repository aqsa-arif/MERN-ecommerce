import mongoose from "mongoose"
import dotenv from 'dotenv';

dotenv.config(); 

const dbConnection =  () => {
    try {
        const con =  mongoose.connect(`${process.env.URL}`, () => {
            console.log("Connected to mongodb database Successfully");
        })
        console.log(con);

    } catch (error) {
        console.log('Error in connecting to database '+ error);
    }   
}

export default dbConnection;