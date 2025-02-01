import { useAddCart } from "../context/ShopingContext";
import Button from "./Button";

function ButtonAddCart({ id }) {
  const { getQty, handelIncreaseAddCart, handelDecreaseAddCart } = useAddCart();
  return (
    <div className="flex items-center gap-2 self-end">
      <Button typeButton="small" onClick={() => handelDecreaseAddCart(id)}>-</Button >
      <p className="font-semibold text-md">{getQty(id)}</p>
      <Button typeButton="small" onClick={() => handelIncreaseAddCart(id)}>+</Button >
    </div>
  );
}

export default ButtonAddCart;
