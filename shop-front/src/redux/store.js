import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slicer/user';

export default configureStore({
  reducer: {
    user: userReducer
  }
})