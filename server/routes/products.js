import express from "express";
import multer from "multer";
import {
  addProduct,
  detailsProducts,
  product,
  products,
  removeProduct,
  updateProduct,
} from "../contorollers/products.js";
import { auth } from "../middelware/auth.js";
import { admin } from "../middelware/admin.js";
import path from "path";
const router = express.Router();
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
router.get("/products", products);
router.get("/products/:id", product);
router.post("/addProduct", auth, admin, upload.single("file"), addProduct);
router.put("/product/:id", auth, admin, upload.single("file"), updateProduct);
router.delete("/product/:id", auth, admin, removeProduct);
router.post("/details", detailsProducts);
export default router;
