import { useAllUsers } from "../featurs/admin/useAllUsers";
import Button from "../ui/Button";

function Users() {
  const { users } = useAllUsers();
  return (
    <div className="h-full  flex flex-col md:p-8 overflow-auto text-sm">
      <h1 className="text-3xl font-semibold ">All Users</h1>
      <div className="font-semibold mt-8 grid grid-cols-[0.5fr_2fr_2fr_1fr] w-full bg-[#F9FAFB]  gap-6 rounded-t-md p-4 border-2 border-black/10">
        <p></p>
        <p className="">name</p>
        <p className="">email</p>
        <p>id</p>
      </div>
      <ul className="flex flex-col w-full  h-[24%] ">
        {users?.data.map((user) => (
          <li
            key={user?._id}
            className="grid grid-cols-[1fr_2fr_2fr_1fr] w-full bg-white  px-4 py-6 gap-6 border-2 border-black/10"
          >
            <img
              src={user?.avatar}
              alt=""
              className="w-20 object-cover"
            />
            <p className="flex items-center  truncate">{user?.userName}</p>
            <p className="flex items-center  truncate">{user?.email}</p>
            <p className="flex items-center truncate">1254</p>
          </li>
        ))}
      </ul>
      <Button typeButton={`large`} type="submit">
        Add New User
      </Button>
    </div>
  );
}

export default Users;
