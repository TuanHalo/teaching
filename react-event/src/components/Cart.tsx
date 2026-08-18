import type React from "react";

interface CartProps {
  pendingCard: number | null;
  cartText: string;
  onConfirm: () => void;
}

export const Cart = ({
  pendingCard,
  cartText,
  onConfirm,
}: CartProps): React.JSX.Element => {
  const handleConfirm = (): void => {
    onConfirm();
  };

  return (
    <section className="region region--cart">
      <p className="caption">
        Cart — child of App; does not hear the card directly
      </p>
      <p className="region__title">Cart</p>
      <p className="slot">{cartText}</p>
      {pendingCard !== null ? (
        <button type="button" className="btn" onClick={handleConfirm}>
          Confirm {pendingCard}
        </button>
      ) : null}
    </section>
  );
};
