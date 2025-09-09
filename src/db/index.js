import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDB = async () => {
 
    try {
        const connectionInstance = await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        console.log(`\n MongoDB connected 🥳`)
    } catch (error) {
        console.error("Error on db connection file: ", error);
        process.exit(1)
    }
}

export default connectDB