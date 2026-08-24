// require('dotenv').config({path: './.env'}) or below 2 lines
// import mongoose from "mongoose"; //no need to put this becoz we are not connecting mongoose to db in this file , we are connecting it in db/index.js file
import dotenv from "dotenv";
import express from "express"
import connectDB from "./db/index.js";

dotenv.config({path: './.env'})

const app = express();

connectDB()

.then(()=>{
    app.listen(process.env.PORT || 8000, () => {
    console.log(`App is listening on port ${process.env.PORT}`);
});

})
.catch((err)=>{
    console.log("MONGODB connection failed !!! : " + err);
})



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