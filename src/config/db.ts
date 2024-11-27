import mongoose from "mongoose"


export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL || '', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('mongoose connected');
    
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
}

export default connectDB;