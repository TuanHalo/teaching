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
    case "ADD_ITEM": {
      const existing = state.find((item) => item.productId === action.productId);
      if (existing) {
        return state.map((item) =>
          item.productId === action.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { productId: action.productId, quantity: 1 }]; 
    }

    case "REMOVE_ITEM":
      return state.filter((item) => item.productId !== action.productId);

    case "INCREASE":
      return state.map((item) =>
        item.productId === action.productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "DECREASE":
      return state
        .map((item) =>
          item.productId === action.productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);

    case "CLEAR":
      return [];

    default:
      return state;
  }
};
