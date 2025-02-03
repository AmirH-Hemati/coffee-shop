import { NavLink } from "react-router-dom";

function Sidebar({ data }) {
  return (
    <div className="w-1/5 h-full bg-[#fff] flex flex-col  gap-6 px-4 py-8 border-r-1 border-black/10 ">
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
{
  /* <NavLink
to={`/adminDashboard`}
className={({ isActive }) =>
  `flex hover:bg-[#F9FAFB] p-3 rounded-sm items-center gap-3 ${
    isActive ? "bg-[#F9FAFB]" : "bg-white"
  }`
}
>
<AlignLeft size="32" color="#00512C" />
<p>Dashboard</p>
</NavLink>
<NavLink
to={`/addProduct`}
className={({ isActive }) =>
  `flex hover:bg-[#F9FAFB] p-3 rounded-sm items-center gap-3 ${
    isActive ? "bg-[#F9FAFB]" : "bg-white"
  }`
}
>
<Add size="32" color="#00512C" />
<p> Add Product</p>
</NavLink>
<NavLink
to={`/order`}
className={({ isActive }) =>
  `flex hover:bg-[#F9FAFB] p-3 rounded-sm items-center gap-3 ${
    isActive ? "bg-[#F9FAFB]" : "bg-white"
  }`
}
>
<Notepad size="32" color="#00512C" />
<p>orders</p>
</NavLink>
<NavLink
to={`/users`}
className={({ isActive }) =>
  `flex hover:bg-[#F9FAFB] p-3 rounded-sm items-center gap-3 ${
    isActive ? "bg-[#F9FAFB]" : "bg-white"
  }`
}
>
<User size="32" color="#00512C" />
<p>users</p>
</NavLink>
<NavLink
to={`/edit`}
className={({ isActive }) =>
  `flex hover:bg-[#F9FAFB] p-3 rounded-sm items-center gap-3 ${
    isActive ? "bg-[#F9FAFB]" : "bg-white"
  }`
}
>
<Notepad size="32" color="#00512C" />
<p>Products</p>
</NavLink> */
}
