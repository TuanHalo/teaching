import type React from "react";
import { CheckoutPage } from "../components/CheckoutPage";
import type { CartItem, Product } from "../types";
import { useUserTheme } from "./UserThemeContext";

interface ConnectedCheckoutPageProps {
  items: CartItem[];
  products: Product[];
}

export const ConnectedCheckoutPage = ({
  items,
  products,
}: ConnectedCheckoutPageProps): React.JSX.Element => {
  const { user } = useUserTheme();
  return <CheckoutPage user={user} items={items} products={products} />;
};
