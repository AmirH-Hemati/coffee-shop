import express from "express";
import {
  allUsers,
  changePassword,
  login,
  register,
} from "../contorollers/auth.js";
import { auth } from "../middelware/auth.js";
import { admin } from "../middelware/admin.js";
const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.put("/changePassword", auth, changePassword);
router.get("/users", auth, admin, allUsers);
export default router;
