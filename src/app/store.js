import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/counter/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
