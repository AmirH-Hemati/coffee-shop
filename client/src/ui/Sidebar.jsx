import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-1/5 bg-red-500">
      <NavLink to={`/adminDashboard`}>
        <p>dashboard</p>
      </NavLink>
      <p> products</p>
      <p>comments</p>
      <p>orders</p>
      <p>users</p>
    </div>
  );
}

export default Sidebar;
