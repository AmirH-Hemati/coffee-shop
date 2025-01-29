import Products from "../models/products.js";
export async function products(req, res) {
  const allProducts = await Products.find({});
  res.json({ message: "ok", data: allProducts });
}

export async function addProduct(req, res) {
  const { name, price } = req.body;
  const product = await Products.create({ name, price });
  res.json({ message: "ok", data: product });
}
