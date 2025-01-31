import express from "express";
import { allUsers, login, register } from "../contorollers/users.js";
import { auth } from "../middelware/auth.js";
import { admin } from "../middelware/admin.js";
const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/users", auth, admin, allUsers);
export default router;
