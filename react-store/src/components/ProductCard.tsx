import type React from "react";
import type { Product } from "../types";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  inCartQuantity?: number;
}

export const ProductCard = ({
  product,
  onAddToCart,
  inCartQuantity = 0,
}: ProductCardProps): React.JSX.Element => {
  const handleAddClick = (): void => {
    onAddToCart(product);
  };

  return (
    <article className="product-card" data-in-cart={inCartQuantity}>
      <div className="product-meta">
        <span className="product-emoji" aria-hidden="true">
          {product.emoji}
        </span>
        <div>
          <p className="product-name">{product.name}</p>
          <p className="product-price">${product.price.toFixed(2)}</p>
        </div>
      </div>
      <button type="button" className="btn" onClick={handleAddClick}>
        Add to cart
      </button>
    </article>
  );
};
