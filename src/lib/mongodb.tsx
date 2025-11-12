// src/lib/mongodb.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://cofo:cofo@risklit-test1.8h23073.mongodb.net/?retryWrites=true&w=majority&appName=RiskLit-Test1";
const MONGODB_DB = process.env.MONGODB_DB || "RiskLit";

let isConnected = false;

export async function connectDB() {
  if (isConnected) return;

  await mongoose.connect(MONGODB_URI, { dbName: MONGODB_DB });
  isConnected = true;
  console.log("✅ Connected to MongoDB:", MONGODB_DB);
}
