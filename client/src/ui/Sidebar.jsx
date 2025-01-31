import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-1/5 bg-[#fff] flex flex-col  gap-6 p-4 border-r-1 border-black/10">
      <NavLink to={`/adminDashboard`}>
        <p>dashboard</p>
      </NavLink>
      <NavLink to={`/addProduct`}>
        <p> products</p>
      </NavLink>
      <NavLink to={`/adminDashboard`}>
        <p>orders</p>
      </NavLink>
      <NavLink to={`/users`}>
        <p>users</p>
      </NavLink>
      <NavLink to={`/edit`}>
        <p>Product</p>
      </NavLink>
    </div>
  );
}

export default Sidebar;
