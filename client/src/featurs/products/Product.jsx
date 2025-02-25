import { Link } from "react-router-dom";
import Button from "../../ui/Button";

function Product({ product }) {
  return (
    <Link to={`/products/${product._id}`} className="h-full">
      <li className="flex flex-col  h-full [box-shadow:2px_2px_2px_rgba(0,0,0,0.1)]   rounded-xl p-2 cursor-pointer">
        <div className="">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-xl"
          />
        </div>
        <h3 className="font-bold text-xl truncate">{product.name}</h3>
        <div className="flex w-full justify-between w-full items-center">
          <p>{product.price}$</p>
          <Button typeButton="circleButton">+</Button>
        </div>
      </li>
    </Link>
  );
}

export default Product;
