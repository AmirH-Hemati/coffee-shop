import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String },
  password: { type: String },
  userName: { type: String },
});

export default mongoose.model("User", userSchema);
