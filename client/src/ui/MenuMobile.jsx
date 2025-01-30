import NavLink from "./NavLink";
import { Heart, Home2, LoginCurve, ShoppingCart } from "iconsax-react";
function MenuMobile() {
  return (
    <nav className="flex justify-around fixed w-full h-16 left-0 bottom-0 bg-white items-center md:hidden [box-shadow] z-20  m-2">
      <NavLink path={`/`}>
        <Home2 size="32" color="#FF8A65" />
      </NavLink>
      <NavLink path={`/favoriets`}>
        <Heart size="32" color="#FF8A65" />
      </NavLink>
      <NavLink path={`/cart`}>
        <ShoppingCart size="32" color="#FF8A65" />
      </NavLink>
      <NavLink path={`/login`}>
        <LoginCurve size="32" color="#FF8A65" />
      </NavLink>
    </nav>
  );
}

export default MenuMobile;
