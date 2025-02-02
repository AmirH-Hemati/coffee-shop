import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useAddCart } from "../context/ShopingContext";
import Button from "./Button";
import NavLink from "./NavLink";
import { ShoppingCart, UserSquare } from "iconsax-react";
import { useUser } from "../featurs/authorizaion/useUser";
import { Link } from "react-router-dom";
function Header() {
  const { getTotalQty } = useAddCart();
  const { token, role } = useAuth();
  const [first, setFirst] = useState(false);
  return (
    <header className=" w-full md:flex flex-row-reverse justify-between h-16 hidden border-b border-b-gray-600  items-center p-4 gap-5">
      <div className="flex gap-6 flex-row-reverse">
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
      </div>
      <div className="flex gap-4">
        <NavLink path="/cart" classNameStyle="">
          {getTotalQty() > 0 && (
            <Button style={`absolute left-1 -top-1`} typeButton="circleButton">
              {getTotalQty()}
            </Button>
          )}
          <ShoppingCart size="32" color="black" />
        </NavLink>
        <UserSquare
          size="32"
          color="#FF8A65"
          onClick={() => setFirst(!first)}
        />
        <User setFirst={setFirst} first={first} />
      </div>
    </header>
  );
}

function User({ setFirst, first }) {
  const { user } = useUser();
  return (
    <div
      className={`flex flex-col gap-8 bg-red-100 p-8 w-1/4 h-full top-0  z-50 fixed -left-full transition-all duration-500 ${
        first ? "left-0" : "-left-full"
      } `}
    >
      <div className="flex w-full justify-between items-center">
        <p>{user?.data?.userName}</p>
        <p onClick={() => setFirst(false)} className="cursor-pointer">
          x
        </p>
      </div>
      <Link to={`/favoriets`}>
        <p className="cursor-pointer bg-red-200 p-2 rounded-sm">
          Your Favorites
        </p>
      </Link>

      <Link to={`/setting`}>
        <p className="cursor-pointer bg-red-200 p-2 rounded-sm">setting</p>
      </Link>
      <Link to={`/changePassword`}>
        <p className="cursor-pointer bg-red-200 p-2 rounded-sm">
          change password
        </p>
      </Link>
      <p className="cursor-pointer bg-red-200 p-2 rounded-sm">Sign Out</p>
    </div>
  );
}
export default Header;
