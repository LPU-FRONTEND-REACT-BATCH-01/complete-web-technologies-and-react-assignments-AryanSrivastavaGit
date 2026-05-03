import { configureStore } from "@reduxjs/toolkit";

import counterReducer from '../slicer/counterSlicer'
import cartReducer from '../slicer/cartSlicer'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer
  }
});