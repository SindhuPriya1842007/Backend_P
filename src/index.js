import mongoose from "mongoose";
import {DB_NAME} from "./constants";
// function connectDB(){}
// connectDB()
import express from "express"

/* Approach - 2 (Connection of db in index.js )
const app = express()

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