import express from "express";
import { addProduct, products } from "../contorollers/products.js";
const router = express.Router();
router.get("/products", products);
router.post("/addProducts", addProduct);
export default router;
