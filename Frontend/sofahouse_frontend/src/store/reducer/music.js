import { GET_LIST } from "../action/music";

let initialState = {
  list: {
    id: "",
    title: "",
    artist: "",
    url: "",
    category: "",
  },
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST:
      if (action.data) {
        return {
          list: action.data,
        };
      }
      return {
        list: null,
      };
  }
};

export default musicReducer;
