import type React from "react";
import type { CartItem, Product } from "../types";

interface CartPanelProps {
  items: CartItem[];
  products: Product[];
  onIncrease: (productId: string) => void;
  onDecrease: (productId: string) => void;
  onRemoveItem: (productId: string) => void;
  onClear: () => void;
}

const findProduct = (
  products: Product[],
  productId: string
): Product | undefined => {
  return products.find((product) => product.id === productId);
};

export const CartPanel = ({
  items,
  products,
  onIncrease,
  onDecrease,
  onRemoveItem,
  onClear,
}: CartPanelProps): React.JSX.Element => {
  if (items.length === 0) {
    return (
      <section className="panel">
        <h2>Cart</h2>
        <p className="cart-empty">Your cart is empty.</p>
      </section>
    );
  }

  const total = items.reduce((sum, item) => {
    const product = findProduct(products, item.productId);
    if (!product) {
      return sum;
    }
    return sum + product.price * item.quantity;
  }, 0);

  const handleClear = (): void => {
    onClear();
  };

  return (
    <section className="panel">
      <h2>Cart</h2>
      <ul className="cart-list">
        {items.map((item) => {
          const product = findProduct(products, item.productId);
          if (!product) {
            return null;
          }

          const handleIncrease = (): void => {
            onIncrease(item.productId);
          };

          const handleDecrease = (): void => {
            onDecrease(item.productId);
          };

          const handleRemove = (): void => {
            onRemoveItem(item.productId);
          };

          return (
            <li key={item.productId} className="cart-item">
              <div className="cart-item-top">
                <div>
                  <strong>
                    {product.emoji} {product.name}
                  </strong>
                  <div className="muted">${product.price.toFixed(2)} each</div>
                </div>
                <button
                  type="button"
                  className="btn-ghost"
                  onClick={handleRemove}
                >
                  Remove
                </button>
              </div>
              <div className="cart-item-controls">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleDecrease}
                >
                  −
                </button>
                <span className="qty">{item.quantity}</span>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleIncrease}
                >
                  +
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="cart-footer">
        <p className="cart-total">Total: ${total.toFixed(2)}</p>
        <button type="button" className="btn btn-danger" onClick={handleClear}>
          Clear cart
        </button>
      </div>
    </section>
  );
};
