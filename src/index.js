// require('dotenv').config({path: './.env'}) or below 2 lines
import dotenv from "dotenv";
dotenv.config({path: './.env'})
import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import express from "express"
const app = express();
import connectDB from "./db/index.js";
connectDB();

    app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
    });


// upto here approach -1 


/* Approach - 2 (Connection of db in index.js )
const app = express()
import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import express from "express"
(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR : " , error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch(error){
        console.log("ERROR: ", error)
        throw err
    }
})() */