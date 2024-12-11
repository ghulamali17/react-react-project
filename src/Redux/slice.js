import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push({ ...action.payload, quantity: 1 });
    },
    
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    increment: (state, action) => {
     const productFound=state.cartItems.find((items)=> items.id ===action.payload)
     if(productFound){
      productFound.quantity+=1;
     }
      
    },
    decrement: (state, action) => {
      const productFound = state.cartItems.find((items) => items.id === action.payload);
      if (productFound && productFound.quantity > 1) {
        productFound.quantity -= 1;
      }
    },
    
  },
});

export const { addToCart, removeItem, clearCart, increment, decrement } = cardSlice.actions;
export default cardSlice;
