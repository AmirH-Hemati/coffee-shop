import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRout() {
  const { token } = useAuth();
  console.log(token);
  if (!token) {
    return <Navigate to={`/login`} />;
  }
  return <Outlet />;
}

export default ProtectedRout;
