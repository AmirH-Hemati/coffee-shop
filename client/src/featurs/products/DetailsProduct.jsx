import { useAddCart } from "../../context/ShopingCart";
import { useProduct } from "./useProduct";

function DetailsProduct() {
  const { handelIncreaseAddCart } = useAddCart();
  const { product } = useProduct();
  return (
    <div className="w-full  h-full md:flex items-center gap-2 md:p-2 ">
      <div className="md:w-1/2 h-1/2 md:rounded-lg">
        <img
          src={product?.data?.image}
          className="w-full  object-cover h-full md:rounded-lg"
          alt={product?.data?.name}
        />
      </div>
      <div className="relative   p-4 md: md:px-2 w-full md:w-1/2 h-1/2 bg-white flex flex-col justify-between  -mt-5 md:-mt-0 z-50 rounded-t-3xl md:rounded-lg md:[box-shadow:0_0_5px_black]">
        <div>
          <h3>{product?.data?.name}</h3>
          <h3>{product?.data?.rating}</h3>
        </div>
        <div>
          <p>cup size</p>
        </div>
        <div>
          <p>about</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat in
            alias quam veniam unde nisi ratione dolorem illo suscipit assumenda
          </p>
        </div>
        <button
          className="w-full p-2 bg-red-500 text-white rounded-lg mt-2 md:mt-0"
          onClick={() => handelIncreaseAddCart(product.data._id)}
        >
          add to cart | 500%
        </button>
      </div>
    </div>
  );
}

export default DetailsProduct;
