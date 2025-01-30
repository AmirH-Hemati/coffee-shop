import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
const authContext = createContext();
function AuthContextProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [role, setRole] = useState("");

  useEffect(() => {
    if (token) {
      const decode = jwtDecode(token);
      setRole(decode.role);
    } else {
      setRole("");
    }
  }, [token]);
  function login(token) {
    localStorage.setItem("token", token);
    setToken(token);
  }
  function logout() {
    localStorage.removeItem("token");
    setToken("");
    setRole("");
  }
  return (
    <authContext.Provider value={{ token, role, login, logout }}>
      {children}
    </authContext.Provider>
  );
}
function useAuth() {
  return useContext(authContext);
}
export { AuthContextProvider, useAuth };
