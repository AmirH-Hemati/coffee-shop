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
  const { data } = await axios.get("http://localhost:1111/api/user/me", {
    headers: { authorization: token },
  });
  return data;
}
export async function editProfile(formData) {
  const token = localStorage.getItem("token");
  const { data } = await axios.put(
    "http://localhost:1111/api/user/edit",
    formData,
    { headers: { authorization: token } }
  );
  return data;
}
