import NavLink from "./NavLink";
import { Heart, Home2, LoginCurve, ShoppingCart } from "iconsax-react";
function MenuMobile() {
  return (
    <nav className="flex justify-around fixed w-full h-16 left-0 bottom-0 bg-white p-3 md:hidden [box-shadow] z-20">
      <NavLink>
        <Home2 size="32" color="#FF8A65" />
      </NavLink>
      <NavLink>
        <Heart size="32" color="#FF8A65" />
      </NavLink>
      <NavLink>
        <ShoppingCart size="32" color="#FF8A65" />
      </NavLink>
      <NavLink>
        <LoginCurve size="32" color="#FF8A65" />
      </NavLink>
    </nav>
  );
}

export default MenuMobile;
