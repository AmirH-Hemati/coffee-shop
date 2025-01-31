import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
function LayoutAdminPage() {
  return (
    <div className="flex h-full w-full">
      <Sidebar />
      <div className="w-4/5 bg-[#F9FAFB]">
        <Outlet />
      </div>
    </div>
  );
}

export default LayoutAdminPage;
