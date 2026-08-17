import type React from "react";
import { CARDS } from "../data/cards";
import { ProductCard } from "./ProductCard";

interface ProductListProps {
  onSend: (card: number) => void;
}

export const ProductList = ({
  onSend,
}: ProductListProps): React.JSX.Element => {
  return (
    <section className="region region--list">
      <p className="caption">ProductList — loops 3 children</p>
      <p className="region__title">ProductList</p>
      <div className="cards">
        {CARDS.map((card) => (
          <ProductCard key={card} card={card} onSend={onSend} />
        ))}
      </div>
    </section>
  );
};
