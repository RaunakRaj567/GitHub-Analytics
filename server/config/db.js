const mongoose = require("mongoose");

const connectDB = async () => {
  if (!process.env.MONGODB_URI) {
    console.warn("MongoDB connection skipped: MONGODB_URI is not set in .env.");
    console.warn("Server is running without MongoDB. Features like Saved Profiles and Analytics History will be disabled until MONGODB_URI is added.");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    console.warn("Server is running without MongoDB. Features like Saved Profiles and Analytics History will not work.");
  }
};

module.exports = connectDB;