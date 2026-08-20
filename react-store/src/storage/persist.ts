import type { CartItem } from "../types";

const STORAGE_KEY = 'react-store-cart';

// Level 6 should use localStorage key `react-store-cart`.
export const loadCart = (): CartItem[] => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) {
            return [];
        }
        const parsed: unknown = JSON.parse(raw);
        if(!Array.isArray(parsed)) {
            return [];
        }
        return parsed as CartItem[];
    } catch {
        return [];
    }
};

export const saveCart = (items: CartItem[]): void => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
        // local storage unavailable or over quota
    }
};
