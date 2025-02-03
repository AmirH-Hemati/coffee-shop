import { NavLink } from "react-router-dom";

function Sidebar({ data }) {
  return (
    <div className="w-full h-full bg-white flex flex-col gap-6">
      {data?.map((item) => (
        <NavLink
          key={item.route}
          to={item.route}
          className={({ isActive }) =>
            `flex hover:bg-[#F9FAFB] p-3 rounded-sm items-center gap-3 ${
              isActive ? "bg-[#F9FAFB]" : "bg-white"
            }`
          }
        >
          {item.icon}
          <p>{item.title}</p>
        </NavLink>
      ))}
    </div>
  );
}

export default Sidebar;
