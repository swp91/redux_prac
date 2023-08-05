import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.name === action.payload.name
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      }
    },
    decrement: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.name === action.payload.name
      );
      if (state.cartItems[itemIndex].quantity === 1) {
        state.cartItems.splice(itemIndex, 1);
      } else {
        state.cartItems[itemIndex].quantity -= 1;
      }
    },
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.name === action.payload.name
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

export const { increment, decrement, addToCart } = CartSlice.actions;

export const CartList = (state) => state.cart.cartItems;

export default CartSlice.reducer;
