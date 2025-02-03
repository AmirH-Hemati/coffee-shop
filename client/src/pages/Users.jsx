import { useAllUsers } from "../featurs/admin/useAllUsers";
import Button from "../ui/Button";

function Users() {
  const { users } = useAllUsers();
  return (
    <div className="h-full  flex flex-col p-8 overflow-auto">
      <h1 className="text-3xl font-semibold ">All Users</h1>
      <div className="font-semibold mt-8 grid grid-cols-5 w-full bg-[#F9FAFB]  gap-6 rounded-t-md p-4 border-2 border-black/10">
        <p>image</p>
        <p>name</p>
        <p>email</p>
        <p>id</p>
      </div>
      <ul className="flex flex-col   h-[55%] overflow-auto">
        {users?.data.map((user) => (
          <li
            key={user?._id}
            className="grid grid-cols-5 w-full bg-white  px-4 py-6 gap-6 border-2 border-black/10"
          >
            <img
              src={user?.avatar}
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <p className="flex items-center">{user?.userName}</p>
            <p className="flex items-center">{user?.email}</p>
            <p className="flex items-center">{user?._id}</p>
          </li>
        ))}
      </ul>
      <Button typeButton={`large`} type="submit">Add New User</Button>
    </div>
  );
}

export default Users;
