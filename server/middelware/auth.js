import User from "../models/users.js";
import jwt from "jsonwebtoken";
export async function auth() {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ message: "Acsess Deniged", data: {} });
  }

  try {
    const decode = jwt.verify(token, "dwqdwqgremnjdwqjhldwq");
    const user = await User.findById(decode._id).select("-password");
    if (!user) {
      return res.status(401).json({ message: "acsess deniged", data: {} });
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(400).json({ message: "invalid Token", data: {} });
  }
}
