import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://cassiarsqueiroz:cq123@cluster0.caqynin.mongodb.net/blog-app');
    console.log("DB Connected");
}