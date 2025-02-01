import express from "express";

const router = express.Router();
router.get("/me", me);

export default router;
