import { combineReducers } from '@reduxjs/toolkit'
import { reducer as formReducer } from 'redux-form'
import studentsReducer from './reducers/studentsReducer'

export default combineReducers({
  students: studentsReducer,
  form: formReducer
})