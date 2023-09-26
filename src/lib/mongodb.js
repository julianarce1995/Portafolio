import * as dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

if (!process.env.MONGODB_URI) {
  throw new Error("Add Mongo URI to .env");
}
async function main() {
  const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/players";
  await mongoose.connect(uri);
}
function connectDB() {
  // eslint-disable-next-line no-console
  main().catch((err) => console.log(err));
}

export default connectDB;
