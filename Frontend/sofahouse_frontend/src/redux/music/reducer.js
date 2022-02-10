const initialState = {
  musics: [],
  select: {
    id: 0,
    title: "",
    artist: "",
    url: "",
    category: ""
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "get-music-list":
      return state.musics;
    case "get-select-music":
      return state.select;
  }
}

export default reducer