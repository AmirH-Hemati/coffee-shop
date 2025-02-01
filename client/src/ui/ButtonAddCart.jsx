import { Trash } from "iconsax-react";
import { useAddCart } from "../context/ShopingContext";
import Button from "./Button";

function ButtonAddCart({ id }) {
  const { getQty, handelIncreaseAddCart, handelDecreaseAddCart } = useAddCart();

  return (
    <div className="flex items-center gap-2 self-center md:self-end">
      <Button typeButton="small" onClick={() => handelDecreaseAddCart(id)}>
        {getQty(id) > 1 ? "-" : <Trash color="#fff" />}
      </Button>
      <p className="font-semibold text-md">{getQty(id)}</p>
      <Button typeButton="small" onClick={() => handelIncreaseAddCart(id)}>
        +
      </Button>
    </div>
  );
}

export default ButtonAddCart;
