import { Outlet } from "react-router-dom";
import Header from "./Header";
import MenuMobile from "./MenuMobile";

function Layout() {
  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <MenuMobile />
      <main className="bg-white flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
