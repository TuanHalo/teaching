import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem } from "../types";

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Assignment 5 — fill these. Payload is productId.
    addItem: (state, action: PayloadAction<string>) => {
      const existing = state.find((item) => item.productId === action.payload);
      if (existing) {
        existing.quantity += 1;
        return;
      }
      state.push({ productId: action.payload, quantity: 1});
    },

    removeItem: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((item) => item.productId === action.payload);
      if (index !== -1)  {
        state.splice(index, 1);
      }
    },

    increase: (state, action: PayloadAction<string>) => {
      const existing = state.find((item) => item.productId === action.payload);
      if (existing) {
        existing.quantity += 1;
      }
    },

    decrease: (state, action: PayloadAction<string>) => {
      const index = state.findIndex((item) => item.productId === action.payload);
      if (index === -1) {
        return;
      }
      const item = state[index];
      item.quantity -= 1;
      if (item.quantity <= 0) {
        state.splice(index, 1);
      }
    },

    clear: () => [],
  },
});

export const { addItem, removeItem, increase, decrease, clear } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
