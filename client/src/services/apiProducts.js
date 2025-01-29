import axios from "axios";

export async function getProducts() {
  const { data } = await axios.get(
    "http://localhost:1111/api/products/products"
  );
  console.log(data);
  return data;
}
