import { useState } from "react";
import { useLogin } from "./useLogin";

function LoginForm() {
  const { login } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handelLogin(e) {
    e.preventDefault();
    login({ email, password });
  }
  return (
    <form
      className="flex flex-col justify-center items-center w-full border p-4  gap-2 lg:w-[30%]"
      onSubmit={handelLogin}
    >
      <input
        type="text"
        placeholder="Email ..."
        className="w-full bg-red-200 p-2 rounded-sm"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password ..."
        className="w-full bg-red-200 p-2 rounded-sm"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-red-500 w-full p-2 rounded-sm" type="submit">
        login
      </button>
    </form>
  );
}

export default LoginForm;
