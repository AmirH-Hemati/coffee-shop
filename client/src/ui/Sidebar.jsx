import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-1/5 bg-red-500 flex flex-col  gap-6 p-4">
      <NavLink to={`/adminDashboard`}>
        <p>dashboard</p>
      </NavLink>
      <NavLink to={`/addProduct`}>
        <p> products</p>
      </NavLink>
      <NavLink to={`/adminDashboard`}>
        <p>orders</p>
      </NavLink>
      <NavLink to={`/adminDashboard`}>
        <p>users</p>
      </NavLink>
      <NavLink to={`/edit`}>
        <p>edit product</p>
      </NavLink>
    </div>
  );
}

export default Sidebar;
