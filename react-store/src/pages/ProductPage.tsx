import type React from "react";
import type { CartItem, Product } from "../types";
import { ProductList } from "../components/ProductList";
import { CartPanel } from "../components/CartPanel";

interface ProductPageProps {
  products: Product[];
  cartItems: CartItem[];
  onAddToCart: (product: Product) => void;
  onIncrease: (productId: string) => void;
  onDecrease: (productId: string) => void;
  onRemoveItem: (productId: string) => void;
  onClear: () => void;
}

export const ProductPage = ({
  products,
  cartItems,
  onAddToCart,
  onIncrease,
  onDecrease,
  onRemoveItem,
  onClear,
}: ProductPageProps): React.JSX.Element => {
  return (
    <div className="store-grid">
      <ProductList
        products={products}
        cartItems={cartItems}
        onAddToCart={onAddToCart}
      />
      <CartPanel
        items={cartItems}
        products={products}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onRemoveItem={onRemoveItem}
        onClear={onClear}
      />
    </div>
  );
};
