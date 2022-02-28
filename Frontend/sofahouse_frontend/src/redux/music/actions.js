import {
    FETCH_MUSIC_REQUEST,
    FETCH_MUSIC_SUCCESS,
    FETCH_MUSIC_FAILURE,
    UPDATE_MUSIC_LIST,
    SELECT_MUSIC,
    GET_DURATIONPLAYED
} from './type'

import musicService from "../../services/music.service"

export const fetchMusic = () => {
    return (dispatch) => {
        dispatch(fetchMusicRequest())
        musicService.getAllMusics()
        .then(response => {
          if (response.length)
            {dispatch(selectMusic(response[0], 0))}
            dispatch(fetchMusicSuccess(response))
        }
        )
        .catch(error => 
            dispatch(fetchMusicFailure(error.message))
        )
    }
}


export const nextMusic = (select,musics) => {
    return (dispatch) => {
        if(select.index === musics.length - 1) {
            dispatch(selectMusic(musics[0], 0))
        } else {
            dispatch(selectMusic(musics[select.index + 1], select.index + 1))
        }
    }
}

export const previousMusic = (select,musics) => {
    return (dispatch) => {
        if(select.index === 0) {
            dispatch(selectMusic(musics[musics.length - 1], musics.length - 1))
        } else {
            dispatch(selectMusic(musics[select.index - 1], select.index - 1))
        }
    }
}

export const getDuration = (play,duration) => {
    return (dispatch) => {
        dispatch(setDuration({play: play, duration: duration}));
    }
}

export const skipMusic = (index,musics) => {
    return (dispatch) => {
        dispatch(selectMusic(musics[index], index))
    }
}

export const shuffleMusic = (musics) => {
    return (dispatch) => {
        dispatch(updateMusicList(musics.sort((a, b) => 0.5 - Math.random())))
        dispatch(selectMusic(musics[0], 0))
    }
}

export const setDuration = durationPlayed => {
    return { 
        type: GET_DURATIONPLAYED,
        payload: durationPlayed,
    }
}

export const updateMusicList = musics => {
    return {
        type: UPDATE_MUSIC_LIST,
        payload: musics
    }
}

export const fetchMusicRequest = () => {
    return {
      type: FETCH_MUSIC_REQUEST
    }
  }
  
  export const fetchMusicSuccess = musics => {
    return {
      type: FETCH_MUSIC_SUCCESS,
      payload: musics
    }
  }
  
  export const fetchMusicFailure = error => {
    return {
      type: FETCH_MUSIC_FAILURE,
      payload: error
    }
  }

  export const selectMusic = (musics,index) => {
      return {
        type: SELECT_MUSIC,
        payload: {
          ...musics,
          index: index
        }
      }
  }
