import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useAddCart } from "../context/ShopingContext";
import Button from "./Button";
import NavLink from "./NavLink";
import {
  Add,
  AlignLeft,
  ArchiveAdd,
  CloseSquare,
  HeartAdd,
  LogoutCurve,
  Notepad,
  Setting,
  Setting2,
  ShoppingCart,
} from "iconsax-react";
import { useUser } from "../featurs/authorizaion/useUser";
import Avatar from "./Avatar";
import Sidebar from "./Sidebar";
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
      className={`[box-shadow:4px_0px_2px_rgba(0,0,0,0.1)] rounded-t-2xl  flex flex-col gap-8 bg-white p-8 w-1/4 h-full top-0  z-50 fixed -left-full transition-all duration-500 ${
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
