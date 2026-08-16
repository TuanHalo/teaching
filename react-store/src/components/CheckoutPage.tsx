import React from "react";
import { CartItem, Product, User } from "../types";

interface CheckoutPageProps {
  user: User | null;
  items: CartItem[];
  products: Product[];
}

const findProduct = (
  products: Product[],
  productId: string
): Product | undefined => {
  return products.find((product) => product.id === productId);
};

export const CheckoutPage = ({
  user,
  items,
  products,
}: CheckoutPageProps): React.JSX.Element => {
  if (!user) {
    return (
      <section className="panel">
        <h2>Checkout</h2>
        <p className="empty-state">Log in to check out</p>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="panel">
        <h2>Checkout</h2>
        <p className="empty-state">
          Add items to your card before checking out.
        </p>
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

  return (
    <section className="panel">
      <h2>Checkout</h2>
      <p className="muted">Ready for {user.name}</p>
      <ul className="checkout-lines">
        {items.map((item) => {
          const product = findProduct(products, item.productId);
          if (!product) {
            return null;
          }

          return (
            <li key={item.productId}>
              {product.emoji} {product.name} x {item.quantity} - $
              {(product.price * item.quantity).toFixed(2)}
            </li>
          );
        })}
      </ul>
      <p className="cart-total">Order total: ${total.toFixed(2)}</p>
      <p className="muted">Payment is not implemented in this sandbox.</p>
    </section>
  );
};
