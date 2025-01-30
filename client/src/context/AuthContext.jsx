import { createContext, useContext } from "react";
import jwtDecode from "jwt-decode";
const authContext = createContext();
function AuthContextProvider({ children }) {
  const tokenLocalStorage = localStorage.getItem("token");
  const userToken = jwtDecode(tokenLocalStorage);
  const token = userToken.token;
  const role = userToken.role;
  return (
    <authContext.Provider value={{ token, role }}>
      {children}
    </authContext.Provider>
  );
}
function useAuth() {
  return useContext(authContext);
}
export { AuthContextProvider, useAuth };
