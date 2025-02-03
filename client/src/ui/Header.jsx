import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useAddCart } from "../context/ShopingContext";
import Button from "./Button";
import NavLink from "./NavLink";
import { CloseSquare, ShoppingCart } from "iconsax-react";
import { useUser } from "../featurs/authorizaion/useUser";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
function Header() {
  const { getTotalQty } = useAddCart();
  const { token, role } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  return (
    <header className=" w-full md:flex flex-row-reverse justify-between h-16 hidden border-b border-b-gray-600  items-center p-4 gap-5">
      <div className="flex gap-6 flex-row-reverse">
        <NavLink path="/">
          <p>home</p>
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
      <div className="flex gap-4 items-center">
        <NavLink path="/cart" classNameStyle="">
          {getTotalQty() > 0 && (
            <Button style={`absolute left-2 top-2`} typeButton="circleButton">
              {getTotalQty()}
            </Button>
          )}
          <ShoppingCart size="32" color="black" />
        </NavLink>
        <Avatar onClick={() => setIsOpen((isOpen) => !isOpen)} />

        <User setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
    </header>
  );
}

function User({ setIsOpen, isOpen }) {
  const { user } = useUser();
  return (
    <div
      className={` rounded-t-2xl flex flex-col gap-8 bg-white p-8 w-1/4 h-full top-0  z-50 fixed -left-full transition-all duration-500 ${
        isOpen ? "left-0" : "-left-full"
      } `}
    >
      <div className="flex w-full justify-between items-center">
        <div className="flex flex-row-reverse items-center gap-2">
          <p className="text-xl font-semibold">{user?.data?.userName}</p>
          <Avatar />
        </div>
        <CloseSquare
          size="40"
          color="black"
          onClick={() => setIsOpen(false)}
          className="cursor-pointer"
        />
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
