import { Outlet } from "react-router-dom";
import Header from "./Header";
function Layout() {
  return (
    <div className="flex flex-col h-screen w-full overflow-hidden">
      <Header />
      <main className=" flex-1 bg-[#F9F5F5]">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
