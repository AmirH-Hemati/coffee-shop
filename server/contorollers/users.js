import User from "../models/users.js";
import bcy from "bcrypt";
import jwt from "jsonwebtoken";
export async function register(req, res) {
  const { userName, password, email } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ message: "User Already Exsit", data: {} });
  }
  const salt = await bcy.genSalt(12);
  const hashedPassword = await bcy.hash(password, salt);
  const result = await User.create({
    password: hashedPassword,
    email,
    userName,
  });
  res.json({ message: "ok", data: result });
}
export async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res
      .status(400)
      .json({ message: "email or password inValid", data: {} });
  }
  const inValid = await bcy.compare(password, user.password);
  if (!inValid) {
    return res
      .status(400)
      .json({ message: "email or password inValid", data: {} });
  }
  ////create jwt
  const token = jwt.sign({ _id: user._id }, "dwqdwqgremnjdwqjhldwq");
  res.json({ message: "ok", data: token });
}
