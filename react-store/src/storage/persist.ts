import type { CartItem } from "../types";

// Level 6 should use localStorage key `react-store-cart`.
export const loadCart = (): CartItem[] => [];

export const saveCart = (_items: CartItem[]): void => {};
