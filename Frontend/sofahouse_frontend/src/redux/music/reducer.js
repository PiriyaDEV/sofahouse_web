import {
  FETCH_MUSIC_REQUEST,
  FETCH_MUSIC_SUCCESS,
  FETCH_MUSIC_FAILURE
} from './type'

const initialState = {
  loading: false,
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
    case FETCH_MUSIC_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_MUSIC_SUCCESS:
      return {
        loading: false,
        musics: action.payload,
        error: '',
      };
    case FETCH_MUSIC_FAILURE: 
      return {
        loading: false,
        musics: [],
        error: action.payload,
      }
  }
}

export default reducer