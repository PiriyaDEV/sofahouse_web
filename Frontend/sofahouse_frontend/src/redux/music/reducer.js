import {
  FETCH_MUSIC_REQUEST,
  FETCH_MUSIC_SUCCESS,
  FETCH_MUSIC_FAILURE,
  UPDATE_MUSIC_LIST,
  SELECT_MUSIC,
  GET_DURATIONPLAYED
} from './type'

const initialState = {
  loading: false,
  musics: [{
    id: 0,
    title: 'Title',
    artist: 'Artist',
    duration: 0,
    music_url: '',
    cover_url: '',
    cat_lyrics_song: false,
    cat_music_prod: false,
    cat_vocal_rec: false,
    cat_music_score: false,
    cat_mix_master: false,
    show_homepage: false,
    created_at: 0,
  }],
  error: '',
  select: {
    index: 0,
    id: 0,
    title: 'Title',
    artist: 'Artist',
    duration: 0,
    music_url: '',
    cover_url: '',
    cat_lyrics_song: false,
    cat_music_prod: false,
    cat_vocal_rec: false,
    cat_music_score: false,
    cat_mix_master: false,
    show_homepage: false,
    created_at: 0,
  },
  durationPlayed: {
    play: false,
    duration: 0,
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
    case GET_DURATIONPLAYED:
      return {
        ...state,
        durationPlayed: action.payload,
    }
    default: return state
  }
}

export default reducer