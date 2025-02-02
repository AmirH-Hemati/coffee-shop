import User from "../models/auth.js";
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
  const token = jwt.sign(
    { _id: user._id, role: user.role },
    "dwqdwqgremnjdwqjhldwq"
  );
  res.json({ message: "ok", data: token });
}

export async function changePassword(req, res) {
  const { email, password, newPassword } = req.body;
  console.log({ email, password, newPassword });
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "user Nout Found", data: {} });
  }
  const inValid = await bcy.compare(password, user.password);
  if (!inValid) {
    return res
      .status(400)
      .json({ message: "email or password inValid", data: {} });
  }
  const salt = await bcy.genSalt(12);
  const hashedNewPassword = await bcy.hash(newPassword, salt);
  const reslut = await User.findOneAndUpdate(
    { email },
    { password: hashedNewPassword },
    { new: true }
  );
  res.json({ message: "ok", data: reslut });
}
export async function allUsers(req, res) {
  const users = await User.find({});
  res.json({ message: "ok", data: users });
}
