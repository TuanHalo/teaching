import type { CartItem } from "../types";

export type CartAction =
  | { type: "ADD_ITEM"; productId: string }
  | { type: "REMOVE_ITEM"; productId: string }
  | { type: "INCREASE"; productId: string }
  | { type: "DECREASE"; productId: string }
  | { type: "CLEAR" };

// Assignment 4 — each case must return the next cart array. Do not mutate state.
export const cartReducer = (
  state: CartItem[],
  action: CartAction
): CartItem[] => {
  switch (action.type) {
    case "ADD_ITEM":
      return state;
    case "REMOVE_ITEM":
      return state;
    case "INCREASE":
      return state;
    case "DECREASE":
      return state;
    case "CLEAR":
      return state;
    default:
      return state;
  }
};
