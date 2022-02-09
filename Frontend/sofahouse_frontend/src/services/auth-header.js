export default function authHeader() {
  let header = {};

  const token = localStorage.getItem("accessToken");

  if (token) header["x-access-token"] = token;

  return header;
}
