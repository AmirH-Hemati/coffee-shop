import { useUser } from "../featurs/authorizaion/useUser";

function Avatar({ onClick }) {
  const { user } = useUser();
  return (
    <img
      onClick={onClick}
      src={user?.data?.avatar}
      className="w-8 h-8 rounded-full border-2 border-black cursor-pointer"
      alt={user?.data?.name}
    />
  );
}

export default Avatar;
