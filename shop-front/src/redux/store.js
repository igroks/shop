import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slicer/user';
import cartReducer from './slicer/cart';

export default configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer
  }
})