import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Add, AlignLeft, Notepad, User } from "iconsax-react";
function LayoutAdminPage() {
  return (
    <div className="flex h-full w-full">
      <div className="w-1/5 h-full z-30 [box-shadow:2px_2px_10px_rgba(0,0,0,0.1)] px-3 py-6 ">
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
      <div className="w-4/5">
        <Outlet />
      </div>
    </div>
  );
}
// bg-[#F9FAFB]
export default LayoutAdminPage;
