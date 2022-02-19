import {
  FETCH_MUSIC_REQUEST,
  FETCH_MUSIC_SUCCESS,
  FETCH_MUSIC_FAILURE,
  UPDATE_MUSIC_LIST,
  SELECT_MUSIC,
} from './type'

const initialState = {
  loading: false,
  musics: [{
    id: 0,
    title: "Title",
    artist: "Artist",
    url: "",
    category: "",
    created_at: 0
    },
    {
    id: 0,
    title: "Title",
    artist: "Artist",
    url: "",
    category: "",
    created_at: 0
    },
    {
    id: 0,
    title: "Title",
    artist: "Artist",
    url: "",
    category: "",
    created_at: 0
    }],
  error: '',
  select: {
    index: 0,
    id: 0,
    title: "Title",
    artist: "Artist",
    url: "",
    category: "",
    created_at: 0
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MUSIC_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_MUSIC_SUCCESS:
      return {
        ...state,
        loading: false,
        musics: action.payload,
        error: '',
      };
    case FETCH_MUSIC_FAILURE: 
      return {
        ...state,
        loading: false,
        musics: [],
        error: action.payload,
      };
    case UPDATE_MUSIC_LIST:
      return {
        ...state,
        musics: action.payload,
      }
    case SELECT_MUSIC:
      return {
        ...state,
        select: action.payload,
      }
    default: return state
  }
}

export default reducer