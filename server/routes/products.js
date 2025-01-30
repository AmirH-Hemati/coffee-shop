import express from "express";
import { addProduct, product, products } from "../contorollers/products.js";
const router = express.Router();
router.get("/products", products);
router.get("/products/:id", product);
router.post("/addProducts", addProduct);
export default router;
