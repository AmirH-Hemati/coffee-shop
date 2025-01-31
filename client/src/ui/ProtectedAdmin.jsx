import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import NotFound from "../pages/NotFound";

function ProtectedAdmin() {
  const { token, role } = useAuth();
  if (!token || role !== "admin") {
    return <NotFound />;
  }
  return <Outlet />;
}

export default ProtectedAdmin;
