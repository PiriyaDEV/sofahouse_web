import http from "../http-common";
import authHeader from "./auth-header";

export default new (class musicService {
  async addNewMusic(music) {
    return await http
      .post("/music/add", music, {
        headers: authHeader(),
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response;
      });
  }

  async updateMusic(music) {
    return await http
      .put("/music/update", music, {
        headers: authHeader(),
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response;
      });
  }

  async deleteMusic(music) {
    return await http
      .put("/music/delete", music, {
        headers: authHeader(),
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response;
      });
  }

  async getAllMusics() {
    return await http
      .get("/music/all")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response;
      });
  }
})();
