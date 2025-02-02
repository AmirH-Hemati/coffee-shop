import express from "express";
import { editProfile, me } from "../contorollers/user.js";
import { auth } from "../middelware/auth.js";

const router = express.Router();
router.get("/me", auth, me);
router.put("/me/edit", auth, editProfile);

export default router;
