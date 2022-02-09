export default function authHeader() {
  let token = localStorage.getItem("accessToken");

  if (token) {
    return { "x-access-token": token };
  }

  return {};
}