import Products from "../models/products.js";
import fs from "fs-extra";
export async function products(req, res) {
  const allProducts = await Products.find({});
  res.json({ message: "ok", data: allProducts });
}

export async function addProduct(req, res) {
  const { name, price } = req.body;
  const product = await Products.create({
    name,
    price,
    image: `http://localhost:1111/${req.file.filename}`,
  });
  res.json({ message: "ok", data: product });
}
export async function product(req, res) {
  const { id } = req.params;
  console.log(id);
  const product = await Products.findOne({ _id: id });
  res.json({ message: "ok", data: product });
}

export async function removeProduct(req, res) {
  const { id } = req.params;
  const result = await Products.deleteOne({ _id: id });
  res.json({ message: "product seccssesfully removed", data: result });
}
export async function updateProduct(req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const updateProduct = { name, price };
  const product = await Products.findById(id);
  if (!product) {
    return res.staust(404).json({ message: "product not found", data: {} });
  }
  if (req.file) {
    if (product.image) {
      fs.removeSync(`images/${product.image.split("/").at(3)}`);
    }
    updateProduct.image = `http://localhost:1111/${req.file.filename}`;
  }
  const updatedProduct = await Products.findByIdAndUpdate(id, updateProduct, {
    new: true,
  });
  res.json({ message: "ok", data: updatedProduct });
}
