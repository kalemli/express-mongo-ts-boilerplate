import mongoose from "mongoose";

export function connectToMongoDB() {
  const MONGO_URI = process.env.MONGO_URI;
  if (!MONGO_URI) {
    console.error(
      "MongoDB connection error: MONGO_URI not specified as env. variable"
    );
    return;
  }
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));
}
