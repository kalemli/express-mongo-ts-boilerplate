import mongoose from "mongoose";

export function connectToMongoDB() {
  const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/preply";
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));
}
