import { useAddCart } from "../../context/ShopingContext";
import ButtonAddCart from "../../ui/ButtonAddCart";
import { useProduct } from "./useProduct";
import Button from "../../ui/Button";
import { Star1 } from "iconsax-react";
import AddToFavorite from "../../ui/AddToFavorite";
function DetailsProduct() {
  const { handelIncreaseAddCart, getQty } = useAddCart();
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
        <AddToFavorite product={product} />
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold ">{product?.data?.name}</h3>
          <p className="bg-[#c1925b] text-base font-semibold flex items-center justify-center text-white px-3 py-0.5 gap-1 rounded-2xl ">
            <span>
              <Star1 size="23" color="#fff" variant="Bold" />
            </span>
            <span>{product?.data?.rating}</span>
          </p>
        </div>
        <div>
          <p>cup size</p>
        </div>
        <div>
          <p className="font-semibold text-base md:text-lg ">About</p>
          <p className=" text-sm md:text-base text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat in
            alias quam veniam unde nisi ratione dolorem illo suscipit assumenda
          </p>
        </div>
        {getQty(product?.data._id) > 0 ? (
          <ButtonAddCart id={product?.data._id} />
        ) : (
          <Button
            typeButton="large"
            style={`self-end`}
            onClick={() => handelIncreaseAddCart(product.data._id)}
          >
            add to cart | 500%{" "}
          </Button>
        )}
      </div>
    </div>
  );
}

export default DetailsProduct;
