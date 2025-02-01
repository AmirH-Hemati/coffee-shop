import { useState } from "react";
import { useRegister } from "./useRegister";

function Register() {
  const { register } = useRegister();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  function handelLogin(e) {
    e.preventDefault();
    if (!email || !password || !userName) return;
    register({ email, password, userName });
  }
  return (
    <form
      className="flex flex-col justify-center items-center w-full border p-4  gap-2 lg:w-[30%]"
      onSubmit={handelLogin}
    >
      <input
        type="text"
        placeholder="user Name ..."
        className="w-full bg-red-200 p-2 rounded-sm"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
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
        sign in
      </button>
    </form>
  );
}

export default Register;
