import { useState } from "react";
import type React from "react";
import { EMPTY } from "../data/cards";

interface ProductCardProps {
  card: number;
  onSend: (card: number) => void;
}

export const ProductCard = ({
  card,
  onSend,
}: ProductCardProps): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = (): void => {
    onSend(card);
  };

  const handleToggleLocal = (): void => {
    setIsOpen((current) => !current);
  };

  return (
    <article className="region region--card">
      <p className="caption">ProductCard {card} — child; Send goes up</p>
      <div className="card-row">
        <p className="region__title">Card {card}</p>
        <div className="actions">
          <button
            type="button"
            className="btn-secondary btn"
            onClick={handleToggleLocal}
          >
            {isOpen ? "Hide" : "Open"}
          </button>
          <button type="button" className="btn" onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
      <p className="slot">{isOpen ? "Local" : EMPTY}</p>
    </article>
  );
};
