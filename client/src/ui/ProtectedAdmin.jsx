import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedAdmin() {
  const { token, role } = useAuth();
  if (!token || role !== "admin") {
    return <Navigate to={`/notFound`} />;
  }
  <Outlet />;
}

export default ProtectedAdmin;
