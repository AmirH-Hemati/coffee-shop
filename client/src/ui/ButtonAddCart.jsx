import { useAddCart } from "../context/ShopingContext";

function ButtonAddCart({ id }) {
  const { getQty, handelIncreaseAddCart, handelDecreaseAddCart } = useAddCart();
  return (
    <div className="flex items-center gap-2">
      <button onClick={() => handelDecreaseAddCart(id)}>-</button>
      <p>{getQty(id)}</p>
      <button onClick={() => handelIncreaseAddCart(id)}>+</button>
    </div>
  );
}

export default ButtonAddCart;
