import { app } from "./app.js";
import Razorpay from "razorpay";
import connectDB from "./config/database.js";

connectDB();

app.listen(process.env.PORT , () => { 
      console.log(`server is Working on ${process.env.PORT}`)
}) 

export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY ,
    key_secret:process.env.RAZORPAY_API_SECRET ,
});