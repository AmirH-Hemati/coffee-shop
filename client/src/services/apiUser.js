import axios from "axios";

export async function getUsers() {
  const token = localStorage.getItem("token");
  const { data } = await axios.get("http://localhost:1111/api/users/users", {
    headers: { authorization: token },
  });
  return data;
}
export async function getUser() {
  const token = localStorage.getItem("token");
  const { data } = await axios.get("http://localhost:1111/user/me", {
    headers: { authorization: token },
  });
  return data;
}
