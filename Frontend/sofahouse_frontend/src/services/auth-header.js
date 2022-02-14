export default function authHeader() {
  let header = {};

  const token = localStorage.getItem("accessToken");

  if (token) header["Authorization"] = "Bearer " + token;

  return header;
}
