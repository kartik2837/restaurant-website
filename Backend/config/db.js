import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://shivanibawane:shivani123@cluster0.9dps5cl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => console.log("DB is Connected Successfully"));
}