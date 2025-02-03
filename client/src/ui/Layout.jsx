import { Outlet } from "react-router-dom";
import Header from "./Header";
import MenuMobile from "./MenuMobile";

function Layout() {
  return (
    <div className="flex flex-col h-screen w-full overflow-hidden">
      <Header />
      {/* <MenuMobile /> */}
      <main className=" flex-1 bg-[#F9F5F5]">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
