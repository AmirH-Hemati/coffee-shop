import User from "../models/auth.js";
export async function me(req, res) {
  const user = req.user;
  res.json({ message: "ok", data: user });
}
export async function editProfile(req, res) {
  const { id } = req.user;
  const { email, userName } = req.body;
  console.log(req.body);
  const updatedProfile = { email, userName };
  const user = await User.findOne({ _id: id });
  if (!user) {
    return res.status(404).json({ data: {}, message: "User Not Found" });
  }
  if (req.file) {
    updatedProfile.image = req.file.filename;
  }

  const result = await User.findByIdAndUpdate({ _id: id }, updatedProfile, {
    new: true,
  });
  res.json({ message: "ok", data: result });
}
