import type React from "react";

interface OrderHistoryProps {
  orderText: string;
}

export const OrderHistory = ({
  orderText,
}: OrderHistoryProps): React.JSX.Element => {
  return (
    <section className="region region--orders">
      <p className="caption">Order history — child of App</p>
      <p className="region__title">Order history</p>
      <p className="slot">{orderText}</p>
    </section>
  );
};
