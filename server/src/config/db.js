import mongoose from "mongoose";
export const connectDb = async() =>{
    try {
        await mongoose.connect("mongodb://localhost:27017/Web503");
        console.log("DB connect");
    } catch (error) {
        console.log(error);
    }
}   