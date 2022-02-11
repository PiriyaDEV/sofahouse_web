import { combineReducers } from 'redux'
import musicReducer from './music/reducer'

const rootReducer = combineReducers({
    music: musicReducer,
  })
  
  export default rootReducer