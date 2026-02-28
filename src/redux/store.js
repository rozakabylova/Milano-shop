import { configureStore } from '@reduxjs/toolkit'

import authReducer from '../slices/authSlice'
import cartReducer from '../slices/cartSlice'
// import colorReducer from '../slices/colorSlice'
import productsReducer from '../slices/productsSlice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    user: authReducer,
    // color: colorReducer,
  },
})
