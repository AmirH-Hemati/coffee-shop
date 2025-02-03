import { Link } from "react-router-dom";
import { useFavorite } from "../context/FavoriteContext";
import ProductNotExist from "../ui/ProductNotExist";

function Favorites() {
  const { favorites } = useFavorite();
  if (favorites?.length < 1)
    return <ProductNotExist message={`Please add some favorite products.`} />;
  return (
    <div className="h-full md:px-6 px-1 py-2 font-montserrat bg-[#f5eeee91] pb-20 md:pb-0 overflow-auto">
      <h1 className="text-lg md:text-2xl font-semibold my-4">Favorite</h1>
      <div className="flex flex-wrap justify-between w-full gap-4">
        {favorites?.map((product) => (
          <Link
            to={`/product/${product?.id}`}
            key={product._id}
            className="w-full md:w-[45%]"
          >
            <div className="bg-white p-1 rounded-xl text-sm md:text-base w-full px-2 shadow-md flex overflow-auto text-black">
              <div className="img md:w-1/4 w-[31%] ">
                <img
                  src={product.image}
                  alt=""
                  className=" aspect-square w-full rounded-2xl object-cover"
                />
              </div>
              <div className="content md:w-3/4 md:px-4 p-1 px-2 w-[69%] flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <p className="  font-semibold md:text-xl text-sm">
                    {product.title}
                  </p>
                  {/* <AddToFavorite product={product} color="#686868" /> */}
                </div>
                <p className=" font-bold ">$50.000</p>

                <p>
                  <span className="font-semibold text-sm">cap size : </span>{" "}
                  <span className="text-gray-600 text-sm">Small</span>
                </p>
                <p>
                  <span className="font-semibold text-sm">level Suger : </span>{" "}
                  <span className="text-gray-600 text-sm">No suger</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
