import { useAuth } from "../context/AuthContext";
import { useAddCart } from "../context/ShopingContext";
import Button from "./Button";
import NavLink from "./NavLink";
import { ShoppingCart } from "iconsax-react";
function Header() {
  const { getTotalQty } = useAddCart();
  const { token, role } = useAuth();
  return (
    <header className="w-full md:flex flex-row-reverse h-16 hidden border-b border-b-gray-600  items-center p-4 gap-5">
      <NavLink path="/">
        <p>home</p>
      </NavLink>
      <NavLink path="/favoriets">
        <p>favorites</p>
      </NavLink>
      <NavLink path="/login">
        <p>login</p>
      </NavLink>
      {token && role === "admin" && (
        <NavLink path="/adminDashboard">
          <p>panelAdmin</p>
        </NavLink>
      )}
      <NavLink path="/cart" classNameStyle="absolute left-0 p-2 ">
        {getTotalQty() > 0 && <Button style={`absolute left-1 -top-1`} typeButton="circleButton">{getTotalQty()}</Button>}
        <ShoppingCart size="32" color="black" />
      </NavLink>
    </header>
  );
}

export default Header;
