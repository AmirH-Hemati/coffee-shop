import axios from "axios";

export async function getProducts() {
  const { data } = await axios.get(
    "http://localhost:1111/api/products/products"
  );
  return data;
}

export async function getProduct(id) {
  const { data } = await axios.get(
    `http://localhost:1111/api/products/products/${id}`
  );
  return data;
}

export async function addProduct(productData, token) {
  const { data } = await axios.post(
    "http://localhost:1111/api/products/addProduct",
    productData,
    { headers: { authorization: token } }
  );
  return data;
}
