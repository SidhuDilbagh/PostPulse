import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGODB)
.then( () => {console.log("DB Connected");})
.catch((err) => {console.log(err);})

const port=3000;
const app=express();

app.listen(3000,() => {
    console.log(`Server running on port ${port}`);
});