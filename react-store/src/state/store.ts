import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { cartReducer } from "./cartSlice";
import { saveCart } from "../storage/persist";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Assignment 6 (alternative to using useEffect in App.tsx) — persists cart on every store state change directly
// but trade off if adding more slices (because subscribe fires on every dispatch, not just cart)
// store.subscribe: dispatch → store changes → save cart
let lastCart = store.getState().cart;
store.subscribe(() => {
  const cart = store.getState().cart;
  if (cart !== lastCart) {
    lastCart = cart;
    saveCart(cart);
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
