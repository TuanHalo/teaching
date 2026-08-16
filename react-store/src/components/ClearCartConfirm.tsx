import type React from "react";

interface ClearCartConfirmProps {
  onConfirm: () => void;
}

// Assignment 11 — replace the Clear cart button in CartPanel with this component.
export const ClearCartConfirm = ({
  onConfirm,
}: ClearCartConfirmProps): React.JSX.Element => {
  const isConfirmingClear: boolean = false;

  const handleAskClear = (): void => {};

  const handleConfirmClear = (): void => {
    onConfirm();
  };

  const handleCancelClear = (): void => {};

  return isConfirmingClear ? (
    <div className="field-row">
      <span>Clear the cart?</span>
      <button
        type="button"
        className="btn btn-danger"
        onClick={handleConfirmClear}
      >
        Yes, clear
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={handleCancelClear}
      >
        Cancel
      </button>
    </div>
  ) : (
    <button type="button" className="btn btn-danger" onClick={handleAskClear}>
      Clear cart
    </button>
  );
};
