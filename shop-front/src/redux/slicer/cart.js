import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  length: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const { payload } = action;
      const { id } = payload;
 
      const productExists = state.products.find(product => product.id === id);
  
      if (productExists) {
        productExists.amount = productExists.amount + payload.amount;
      } else {
        state.products.push(payload);
      }
      state.length = state.length + payload.amount;
      state.total = state.total + (payload.amount * payload.price);
    },
    remove: (state, action) => {
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload.products.id)
      }
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
