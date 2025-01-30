import { createContext, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
const authContext = createContext();
function AuthContextProvider({ children }) {
  const tokenLocalStorage = localStorage.getItem("token") || "";
  console.log(tokenLocalStorage);
  if (!tokenLocalStorage) {
    return toast.error("please login your account");
  }
  const userToken = jwtDecode(tokenLocalStorage);
  console.log(userToken);
  const token = tokenLocalStorage;
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
