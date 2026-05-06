import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // Sirf process.env.MONGO_URI, koi extra strings nahi
        await mongoose.connect(process.env.MONGO_URI); 
        console.log('MongoDb Connect Successfully ✅');
    } catch (error) {
        console.log('Mongodb Connection Error ❌', error.message);
    }
}

export default connectDB;