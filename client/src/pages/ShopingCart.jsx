import { ArrowDown2, ArrowUp2, Trash } from "iconsax-react";
import { useAddCart } from "../context/ShopingContext";
import { useProductDetails } from "../featurs/products/useProductDetails";
import { useEffect } from "react";
import ProductNotExist from "../ui/ProductNotExist";

function ShopingCart() {
  const { getProductDetails, products } = useProductDetails();
  const {
    handelIncreaseAddCart,
    handelDecreaseAddCart,
    addCart,
    removeProduct,
  } = useAddCart();
  useEffect(() => {
    getProductDetails(addCart);
  }, [getProductDetails, addCart]);
  if (products?.data?.length < 1)
    return (
      <ProductNotExist message={`Please add some  products to Add Cart.`} />
    );

  return (
    <div className="h-full  px-6 py-2 font-montserrat  overflow-hidden bg-[#f5eeee91]">
      <h1 className="text-lg md:text-2xl font-semibold my-1 md:my-3">
        Shop Cart
      </h1>
      <div className="flex w-full h-full flex-col   items-center justify-start gap-5 ">
        <div className="bg-[#f5eeee91] rounded-md  flex flex-col w-full md:w-4/5 md:max-h-[60%] max-h-[50%]  gap-2 items-center overflow-auto  ">
          {products?.data?.map((product) => (
            <div
              key={product?._id}
              className="  bg-white p-2 w-full rounded-lg text-sm md:text-base justify-center  shadow-md flex text-black"
            >
              <div className="img md:w-1/5 w-1/4  ">
                <img
                  src={product?.image}
                  alt=""
                  className=" aspect-square w-full rounded-2xl object-cover"
                />
              </div>
              <div className=" items-center w-3/4 md:w-4/5 p-1 flex justify-between text-base md:text-lg">
                <div>
                  <p className="  font-semibold md:text-lg text-base">
                    {product?.name}
                  </p>
                  <p className="text-sm md:text-base">{product?.price}</p>
                </div>

                <div className="flex  items-center gap-2 md:gap-3">
                  <span className="text-base md:text-base">{product?.qty}</span>
                  <div className="flex flex-col">
                    <ArrowUp2
                      size="24"
                      color="black"
                      variant="Bold"
                      className="cursor-pointer"
                      onClick={() => {
                        console.log(product?._id);
                        handelIncreaseAddCart(product?._id);
                      }}
                    />
                    <ArrowDown2
                      size="24"
                      color="black"
                      variant="Bold"
                      className="cursor-pointer"
                      onClick={() => handelDecreaseAddCart(product?._id)}
                    />
                  </div>
                  <Trash
                    size="24"
                    color="black"
                    variant="Bold"
                    className="cursor-pointer"
                    onClick={() => removeProduct(product?._id)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#00512C] md:w-4/5  max-h-[30%] gap-1 rounded-md  w-full p-2 shadow-md  flex flex-col justify-evenly ">
          <h1 className="text-lg md:text-xl font-semibold">Shop Cart</h1>
          <p>Total Price : 55151</p>
          <p>Total Quantity : 10</p>
          <button className="bg-gray-100 text-[#00512C] w-full md:w-1/3 md:self-end border-none  p-2 rounded-md align-middle text-sm font-semibold">
            Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopingCart;
