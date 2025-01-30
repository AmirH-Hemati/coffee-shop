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
