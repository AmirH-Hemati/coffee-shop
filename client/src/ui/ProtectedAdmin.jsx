import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import NotFound from "../pages/NotFound";

function ProtectedAdmin() {
  const { token, role } = useAuth();
  console.log(role);
  if (!token || role !== "admin") {
    return <NotFound />;
  }
  return <Outlet />;
}

export default ProtectedAdmin;
