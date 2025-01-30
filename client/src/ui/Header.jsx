import { useAddCart } from "../context/ShopingContext";
import NavLink from "./NavLink";
import { ShoppingCart } from "iconsax-react";
function Header() {
  const { getTotalQty } = useAddCart();
  return (
    <header className="w-full md:flex flex-row-reverse h-16 hidden border-b border-b-gray-600  items-center p-4 gap-5">
      <NavLink path="/">
        <p>home</p>
      </NavLink>
      <NavLink path="/">
        <p>favorites</p>
      </NavLink>
      <NavLink path="/login">
        <p>login</p>
      </NavLink>
      <NavLink path="/cart" classNameStyle="absolute left-0 p-2">
        <p>{getTotalQty() > 0 && getTotalQty()}</p>
        <ShoppingCart size="32" color="#FF8A65" />
      </NavLink>
    </header>
  );
}

export default Header;
