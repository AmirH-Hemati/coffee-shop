import { useState } from "react";
import LoginForm from "../featurs/authorizaion/LoginForm";
import Register from "../featurs/authorizaion/Register";

function Login() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="flex h-full w-full justify-center items-center flex-col">
      {isLogin ? <LoginForm /> : <Register />}
      <p
        onClick={() => setIsLogin((isLogin) => !isLogin)}
        className="cursor-pointer"
      >
        do you have account ?
      </p>
    </div>
  );
}

export default Login;
