import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String },
  password: { type: String },
  userName: { type: String },
  role: { type: String, default: "user" },
  avatar: {
    type: String,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4n4D5jth4fm4GE7ut7lWW-04lnDO2OkD-sg&s",
  },
});

export default mongoose.model("User", userSchema);
