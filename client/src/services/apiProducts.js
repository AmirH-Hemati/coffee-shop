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
export async function editProduct({ id, formData, token }) {
  const { data } = await axios.put(
    `http://localhost:1111/api/products/product/${id}`,
    formData,
    { headers: { authorization: token } }
  );
  return data;
}
export async function removeProduct(id) {
  const token = localStorage.getItem("token");
  const { data } = await axios.delete(
    `http://localhost:1111/api/products/product/${id}`,
    { headers: { authorization: token } }
  );
  return data;
}
export async function getProductDetails(items) {
  const { data } = await axios.post(
    "http://localhost:1111/api/products/details",
    { items }
  );
  return data;
}
