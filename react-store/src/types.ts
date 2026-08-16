export interface Product {
  id: string;
  name: string;
  emoji: string;
  price: number;
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface User {
  name: string;
}

export type ThemeName = "light" | "dark";

export interface Order {
  id: string;
  iterms: CartItem[];
  total: number;
}
