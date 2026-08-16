import type React from "react";
import type { CartItem, Product, User } from "../types";

export const PROMO_CODE = "SAVE10";

interface CheckoutFormProps {
  user: User | null;
  items: CartItem[];
  products: Product[];
  onPlaceOrder: () => void;
}

export const isPromoValid = (code: string): boolean => {
  return code.trim().toUpperCase() === PROMO_CODE;
};

export const canPlaceOrder = (
  user: User | null,
  items: CartItem[],
  hasAgreed: boolean
): boolean => {
  return Boolean(user) && items.length > 0 && hasAgreed;
};

export const getDiscountedTotal = (
  items: CartItem[],
  products: Product[],
  promoCode: string
): number => {
  const total = items.reduce((sum, item) => {
    const product = products.find((entry) => entry.id === item.productId);
    if (!product) {
      return sum;
    }
    return sum + product.price * item.quantity;
  }, 0);

  if (!isPromoValid(promoCode)) {
    return total;
  }

  return Number((total * 0.9).toFixed(2));
};

// Assignments 7–9 — wire this into CheckoutPage. Promo, agree, and place-order
// stay local except onPlaceOrder, which lifts the new Order to App.
export const CheckoutForm = ({
  user,
  items,
  products,
  onPlaceOrder,
}: CheckoutFormProps): React.JSX.Element => {
  const promoCode = "";
  const hasAgreed = false;

  const handlePromoChange = (
    _event: React.ChangeEvent<HTMLInputElement>
  ): void => {};

  const handleAgreeChange = (
    _event: React.ChangeEvent<HTMLInputElement>
  ): void => {};

  const handlePlaceOrder = (): void => {
    onPlaceOrder();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!canPlaceOrder(user, items, hasAgreed)) {
      return;
    }
    handlePlaceOrder();
  };

  const disabled = !canPlaceOrder(user, items, hasAgreed);
  const total = getDiscountedTotal(items, products, promoCode);
  const promoState =
    promoCode.trim() === ""
      ? "empty"
      : isPromoValid(promoCode)
      ? "valid"
      : "invalid";

  return (
    <form className="form-stack" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="promo-code">Promo code</label>
        <input
          id="promo-code"
          type="text"
          value={promoCode}
          onChange={handlePromoChange}
          autoComplete="off"
        />
        {promoState === "valid" ? (
          <p className="promo-ok">SAVE10 applied — 10% off</p>
        ) : null}
        {promoState === "invalid" ? (
          <p className="promo-bad">That code is not valid.</p>
        ) : null}
      </div>
      <label className="field-row">
        <input
          type="checkbox"
          checked={hasAgreed}
          onChange={handleAgreeChange}
        />
        I agree to the terms
      </label>
      <p className="cart-total">Order total: ${total.toFixed(2)}</p>
      <button type="submit" className="btn" disabled={disabled}>
        Place order
      </button>
    </form>
  );
};
