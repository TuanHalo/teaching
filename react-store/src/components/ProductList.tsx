import type React from "react";
import type { CartItem, Product } from "../types";
import { ProductCard } from "./ProductCard";

interface ProductListProps {
  products: Product[];
  cartItems?: CartItem[];
  onAddToCart: (product: Product) => void;
}

export const getInCartQuantity = (
  items: CartItem[],
  productId: string
): number => {
  const match = items.find((item) => item.productId === productId);
  return match?.quantity ?? 0;
};

export const ProductList = ({
  products,
  cartItems = [],
  onAddToCart,
}: ProductListProps): React.JSX.Element => {
  return (
    <section className="panel">
      <h2>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            inCartQuantity={getInCartQuantity(cartItems, product.id)}
          />
        ))}
      </div>
    </section>
  );
};
