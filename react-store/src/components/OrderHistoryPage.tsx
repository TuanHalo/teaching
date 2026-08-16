import React from "react";
import { Order, User } from "../types";

interface OrderHistoryPageProps {
  user: User | null;
  orders: Order[];
}

export const OrderHistoryPage = ({
  user,
  orders,
}: OrderHistoryPageProps): React.JSX.Element => {
  if (!user) {
    return (
      <section className="panel">
        <h2>Order history</h2>
        <p className="empty-state">Log in to see orders</p>
      </section>
    );
  }

  if (orders.length === 0) {
    return (
      <section className="panel">
        <h2>Order history</h2>
        <ul className="checkout-lines">
          {orders.map((order) => (
            <li key={order.id}>
              Order {order.id} - ${order.total.toFixed(2)}
            </li>
          ))}
        </ul>
      </section>
    );
  }
};
