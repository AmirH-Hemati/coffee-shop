import express from "express";
import { editProfile, me } from "../contorollers/user.js";
import { auth } from "../middelware/auth.js";
import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    const now = Date.now();
    cb(null, now + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });
const router = express.Router();
router.get("/me", auth, me);
router.put("/edit", auth, upload.single("file"), editProfile);

export default router;
