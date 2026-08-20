import type React from "react";
import { OrderHistoryPage } from "../components/OrderHistoryPage";
import type { Order } from "../types";
import { useUserTheme } from "./UserThemeContext";

interface ConnectedOrderHistoryPageProps {
  orders?: Order[];
}

export const ConnectedOrderHistoryPage = ({
  orders = [],
}: ConnectedOrderHistoryPageProps): React.JSX.Element => {
  const { user } = useUserTheme();
  return <OrderHistoryPage user={user} orders={orders} />;
};
