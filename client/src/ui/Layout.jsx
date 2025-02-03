import { Outlet } from "react-router-dom";
import Header from "./Header";
function Layout() {
  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <main className=" flex-1 bg-red-500 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
