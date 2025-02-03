import Product from "./Product";
import { useProducts } from "./useProducts";

function AllProducts() {
  const { isLoading, products } = useProducts();
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 p-1 overflow-y-auto bg-[#F9F5F5] h-1/3">
      {products?.data?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </ul>
  );
}

export default AllProducts;
