export default function authHeader() {
  let header = {};

  const token = localStorage.getItem("admin_tk");

  if (token) header["Authorization"] = "Bearer " + token;

  return header;
}
