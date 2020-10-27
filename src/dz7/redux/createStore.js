import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from './reducers';


export default () => {
  return configureStore({
    reducer: rootReducer,
    // middleware: getDefaultMiddleware().concat([
      
    // ]),
    devTools: true,
  })
};