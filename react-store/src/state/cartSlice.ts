import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem } from "../types";

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Assignment 5 — fill these. Payload is productId.
    addItem: (_state, _action: PayloadAction<string>) => {},
    removeItem: (_state, _action: PayloadAction<string>) => {},
    increase: (_state, _action: PayloadAction<string>) => {},
    decrease: (_state, _action: PayloadAction<string>) => {},
    clear: (_state) => {},
  },
});

export const { addItem, removeItem, increase, decrease, clear } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
