import musicService from "../../services/music.service";

export const GET_LIST = "GET_LIST";

export const getList = () => {
  return (dispatch) => {
    return musicService
      .getAllMusics()
      .then((res) => {
        dispatch({
          type: GET_LIST,
          data: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
