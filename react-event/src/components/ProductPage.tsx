import type React from "react";
import { Cart } from "./Cart";
import { ProductList } from "./ProductList";

interface ProductPageProps {
  pendingCard: number | null;
  cartText: string;
  onSend: (card: number) => void;
  onConfirm: () => void;
}

export const ProductPage = ({
  pendingCard,
  cartText,
  onSend,
  onConfirm,
}: ProductPageProps): React.JSX.Element => {
  return (
    <section className="region region--page">
      <p className="caption">ProductPage — child of App</p>
      <div className="split">
        <ProductList onSend={onSend} />
        <Cart
          pendingCard={pendingCard}
          cartText={cartText}
          onConfirm={onConfirm}
        />
      </div>
    </section>
  );
};
