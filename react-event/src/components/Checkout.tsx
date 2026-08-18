import type React from "react";

interface CheckoutProps {
  showNext: boolean;
  checkoutText: string;
  onNext: () => void;
}

export const Checkout = ({
  showNext,
  checkoutText,
  onNext,
}: CheckoutProps): React.JSX.Element => {
  const handleNext = (): void => {
    onNext();
  };

  return (
    <section className="region region--checkout">
      <p className="caption">Checkout — child of App</p>
      <p className="region__title">Checkout</p>
      <p className="slot">{checkoutText}</p>
      {showNext ? (
        <button type="button" className="btn" onClick={handleNext}>
          Next
        </button>
      ) : null}
    </section>
  );
};
