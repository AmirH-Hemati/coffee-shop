import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useAddCart } from "../context/ShopingContext";
import {
  ArchiveAdd,
  CloseSquare,
  Heart,
  Home2,
  LoginCurve,
  LogoutCurve,
  Setting,
  Setting2,
  ShoppingCart,
  UserEdit,
} from "iconsax-react";
import { useUser } from "../featurs/authorizaion/useUser";
import Avatar from "./Avatar";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";
function Header() {
  const { getTotalQty } = useAddCart();
  const { token, role } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  return (
    <header className="fixed z-50 md:relative bottom-0 bg-white left-0 w-full flex md:flex-row-reverse justify-between h-16  border-b border-b-gray-600  items-center p-4 gap-5">
      <div className="flex gap-6 md:flex-row-reverse w-1/2  justify-around md:justify-start ">
        <NavLink to="/">
          <Home2 size="32" color="#FF8A65" className="md:hidden" />
          <p className="hidden md:block">Home</p>
        </NavLink>
        <NavLink to="/favoriets">
          <Heart size="32" color="#FF8A65" className="md:hidden" />
          <p className="hidden md:block">Favoriets</p>
        </NavLink>
        {token && role === "admin" && (
          <NavLink to="/adminDashboard">
            <UserEdit size="32" color="#FF8A65" className="md:hidden" />
            <p className="hidden md:block">PanelAdmin</p>
          </NavLink>
        )}
      </div>
      <div className="flex gap-4 items-center flex-row-reverse md:flex-row w-1/2 justify-around md:justify-start">
        {token ? (
          <Avatar onClick={() => setIsOpen((isOpen) => !isOpen)} />
        ) : (
          <NavLink to="/login">
            <p className="hidden md:block">Login</p>
            <LoginCurve size="32" color="#FF8A65" className="md:hidden" />
          </NavLink>
        )}
        <NavLink to="/cart" classNameStyle="">
          {/* {getTotalQty() > 0 && (
    <Button style={`absolute left-2 top-2`} typeButton="circleButton">
      {getTotalQty()}
    </Button>
  )} */}
          <ShoppingCart size="32" color="black" />
        </NavLink>
      </div>
      <User setIsOpen={setIsOpen} isOpen={isOpen} />
    </header>
  );
}

function User({ setIsOpen, isOpen }) {
  const { user } = useUser();
  return (
    <div
      className={` md:rounded-t-2xl  flex flex-col gap-8 bg-white p-8 w-full md:w-1/4 h-full top-0  z-50 fixed -left-full transition-all duration-500 [box-shadow:4px_0px_2px_rgba(0,0,0,0.1)] ${
        isOpen ? "left-0" : "-left-full"
      } `}
    >
      <div className="flex w-full justify-between items-center">
        <div className="flex flex-row-reverse items-center gap-2">
          <p className="text-xl font-semibold">{user?.data?.userName}</p>
          <Avatar />
        </div>
        <CloseSquare
          size="36"
          color="#00512C"
          onClick={() => setIsOpen(false)}
          className="cursor-pointer"
        />
      </div>
      <Sidebar
        onClick={() => setIsOpen(false)}
        data={[
          {
            title: "Your Favorites",
            icon: <ArchiveAdd size="32" color="#00512C" />,
            route: "/favoriets",
          },
          {
            title: "Setting",
            icon: <Setting2 size="32" color="#00512C" />,
            route: "/setting",
          },
          {
            title: "Change Password",
            icon: <Setting size="32" color="#00512C" />,
            route: "/changePassword",
          },
        ]}
      />
      <div className="flex hover:bg-[#F9FAFB] p-3 rounded-sm items-center gap-3  cursor-pointer">
        <LogoutCurve size="32" color="#00512C" />
        <p>Sign Out</p>
      </div>
    </div>
  );
}
export default Header;
