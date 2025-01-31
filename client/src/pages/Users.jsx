import { useAllUsers } from "../featurs/admin/useAllUsers";

function Users() {
  const { users } = useAllUsers();
  console.log(users);
  return (
    <ul className="flex flex-col gap-2 p-2">
      <div className="grid grid-cols-4 bg-red-500 text-white p-4">
        <p>name</p>
        <p>email</p>
        <p>id</p>
      </div>
      {users?.data.map((user) => (
        <li
          key={user?._id}
          className="grid grid-cols-4 bg-red-500 text-white p-4"
        >
          <p>{user?.userName}</p>
          <p>{user?.email}</p>
          <p>{user?._id}</p>
        </li>
      ))}
    </ul>
  );
}

export default Users;
