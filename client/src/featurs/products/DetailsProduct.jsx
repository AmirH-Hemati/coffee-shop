import { useAddCart } from "../../context/ShopingContext";
import ButtonAddCart from "../../ui/ButtonAddCart";
import { useProduct } from "./useProduct";
import Button from "../../ui/Button";
import { Back, Star1 } from "iconsax-react";
import AddToFavorite from "../../ui/AddToFavorite";
import DefferentType from "../../ui/DefferentType";
import Score from "../../ui/Score";
import { useNavigate } from "react-router-dom";
function DetailsProduct() {
  const { handelIncreaseAddCart, getQty } = useAddCart();
  const { product } = useProduct();
  const navigate = useNavigate();
  return (
    <div className="w-full  h-full md:flex items-center gap-2 md:p-2 ">
      <div className=" relative md:w-1/2  md:rounded-lg">
        <TopMobile product={product?.data} navigate={navigate} />
        <img
          src={product?.data?.image}
          className="w-full  object-cover h-full md:rounded-lg"
          alt={product?.data?.name}
        />
        <TitleMobile nameProduct={product?.data?.name} />
      </div>
      <div className="relative gap-3 md:gap-6   p-4 md: md:px-2 w-full md:w-1/2  bg-white flex flex-col justify-between  -mt-5 md:-mt-0 z-50 rounded-t-3xl md:rounded-lg md:[box-shadow:0_0_5px_black]">
        <div className="self-end hidden md:block">
          <AddToFavorite product={product?.data} />
        </div>
        <div className="hidden md:flex justify-between items-center ">
          <h3 className="md:text-3xl text-xl font-semibold ">
            {product?.data?.name}
          </h3>
          <Score rateProduct={product?.data?.rating} />
        </div>

        <DefferentType
          title={`Cup Size`}
          items={["Small", "Medium", "Large"]}
        />
        <DefferentType
          title={`Level Suger`}
          items={["No Suger", "Low", "Medium"]}
        />

        <div>
          <p className="font-semibold text-sm md:text-lg ">About</p>
          <p className=" text-xs md:text-sm text-gray-700">
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

function TopMobile({ product, navigate }) {
  return (
    <div className="md:hidden flex space-x-2 w-full justify-between absolute top-2 px-6 py-2 ">
      <Back size="32" color="#fff" onClick={() => navigate(-1)} />
      <AddToFavorite product={product} color="#fff" />
    </div>
  );
}
function TitleMobile({ nameProduct }) {
  return (
    <div className="w-full md:hidden  absolute flex justify-between text-white bottom-8 left-0 px-6">
      <p className="text-2xl font-semibold">{nameProduct}</p>
      <Score />
    </div>
  );
}
export default DetailsProduct;
