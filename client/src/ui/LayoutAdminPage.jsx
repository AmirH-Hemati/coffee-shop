import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import {
  Add,
  AlignLeft,
  CloseSquare,
  HambergerMenu,
  Notepad,
  User,
} from "iconsax-react";
import { useUser } from "../featurs/authorizaion/useUser";
import { useState } from "react";
function LayoutAdminPage() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  return (
    <div className="flex flex-col md:flex-row h-full w-full p-2">
      <div className="w-full bg-red-500 md:hidden z-20  flex justify-between items-center">
        <img src={user?.data?.avatar} alt="" className="w-8 h-8 rounded-full" />
        <HambergerMenu
          size="32"
          color="black"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        />
      </div>
      <div
        className={`fixed md:relative z-40 top-0  md:left-0 duration-500 ${
          isOpen ? "left-0" : "-left-full"
        } space-y-4 w-full md:w-1/5 h-full  bg-white [box-shadow:2px_2px_10px_rgba(0,0,0,0.1)] px-3 py-6 `}
      >
        <div className="w-full justify-between flex md:hidden ">
          <p></p>
          <CloseSquare
            size="32"
            color="black"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <Sidebar
          onClick={() => setIsOpen(false)}
          data={[
            {
              title: "Dashboard",
              icon: <AlignLeft size="32" color="#00512C" />,
              route: "/adminDashboard",
            },
            {
              title: "Add Product",
              icon: <Add size="32" color="#00512C" />,
              route: "/addProduct",
            },
            {
              title: "Orders",
              icon: <Notepad size="32" color="#00512C" />,
              route: "/order",
            },
            {
              title: "Users",
              icon: <User size="32" color="#00512C" />,
              route: "/users",
            },
            {
              title: "Products",
              icon: <Notepad size="32" color="#00512C" />,
              route: "/edit",
            },
          ]}
        />
      </div>
      <div className="w-full md:w-4/5">
        <Outlet />
      </div>
    </div>
  );
}
// bg-[#F9FAFB]
export default LayoutAdminPage;
