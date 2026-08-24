import mongoose from "mongoose";
import express from "express";
import {DB_NAME} from "../constants.js";
const connectDB = async () =>{
try {
    // const app = express();
    console.log("Trying to connect to MongoDB...");

    await mongoose.connect(process.env.MONGODB_URI, {
        serverSelectionTimeoutMS: 10000
    });
    // const connectnInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("MongoDB connected successfully!");
    // console.log(`\n MONGODB connected !! DB HOST : ${connectnInstance.connection.host}\n`);

} catch (error) {
    console.log("MONGODB connection error:", error);
    process.exit(1); // Exit the process with an error code
}}
export default connectDB