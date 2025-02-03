import { useAllUsers } from "../featurs/admin/useAllUsers";
import Button from "../ui/Button";

function Users() {
  const { users } = useAllUsers();
  return (
    <div className="w-full  flex flex-col md:p-8 overflow-hidden  text-sm ">
      <h1 className="md:text-3xl text-lg font-semibold ">All Users</h1>
      <div className="font-semibold mt-2 md:mt-8 grid grid-cols-[1fr_1fr_3fr] w-full bg-[#F9FAFB]  gap-6 rounded-t-md p-4 border-2 border-black/10">
        <p>image</p>
        <p className="">name</p>
        <p className="">email</p>
      </div>

      <ul className="flex flex-col w-full h-[60%] md:h-full overflow-y-auto">
        {users?.data.map((user) => (
          <li
            key={user?._id}
            className="grid grid-cols-[1fr_1fr_3fr] w-full bg-white  px-4 py-6 gap-6 border-2 border-black/10"
          >
            <img src={user?.avatar} alt="" className="w-20 object-cover " />
            <p className="flex items-center  truncate">{user?.userName}</p>
            <p className="flex items-center  truncate text-xs">{user?.email}</p>
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
