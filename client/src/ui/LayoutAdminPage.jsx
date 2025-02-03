import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Add, AlignLeft, Notepad, User } from "iconsax-react";
function LayoutAdminPage() {
  return (
    <div className="flex h-full w-full">
      <div className="w-1/5 h-full">
        <Sidebar
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
      <div className="w-4/5 bg-[#F9FAFB]">
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutAdminPage;
