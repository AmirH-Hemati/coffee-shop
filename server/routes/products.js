import express from "express";
import {
  addProduct,
  product,
  products,
  removeProduct,
} from "../contorollers/products.js";
import { auth } from "../middelware/auth.js";
import { admin } from "../middelware/admin.js";
const router = express.Router();
router.get("/products", products);
router.get("/products/:id", product);
router.post("/addProducts", auth, admin, addProduct);
router.delete("/removeProduct/:id", auth, admin, removeProduct);
export default router;
