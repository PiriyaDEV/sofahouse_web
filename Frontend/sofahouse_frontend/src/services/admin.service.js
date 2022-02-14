import http from "../http-common";

export default new (class AdminService {
  async login(admin) {
    return await http
      .post("/admin/login", admin)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  }
})();
