import Product from "./Product";
import { useProducts } from "./useProducts";

function AllProducts() {
  const { isLoading, products } = useProducts();
  console.log(products);
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 p-1 overflow-y-auto h-[85%]">
      {products?.data?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </ul>
  );
}

export default AllProducts;
