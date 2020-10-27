import { combineReducers } from 'redux';
import gistsReducer from './gistsReducer'
import fileReducer from './fileReducer'

export default combineReducers({
  gists: gistsReducer,
  files: fileReducer,
})