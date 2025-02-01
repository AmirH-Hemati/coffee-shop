import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String },
  password: { type: String },
  userName: { type: String },
  role: { type: String, default: "user" },
  avatar: { type: String, default: "image for avatar user" },
});

export default mongoose.model("User", userSchema);
