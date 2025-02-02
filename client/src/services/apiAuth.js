import axios from "axios";

export async function login({ email, password }) {
  const { data } = await axios.post("http://localhost:1111/api/users/login", {
    email,
    password,
  });
  return data;
}
export async function register({ email, password, userName }) {
  console.log(userName);
  const { data } = await axios.post(
    "http://localhost:1111/api/users/register",
    {
      email,
      password,
      userName,
    }
  );
  return data;
}

export async function changePassword({ email, password, newPassword }) {
  const token = localStorage.getItem("token");
  const { data } = await axios.put(
    "http://localhost:1111/api/users/changePassword",
    { email, password, newPassword },
    { headers: { authorization: token } }
  );
  return data;
}
