import type React from "react";
import type { CartItem, Product } from "./types";
import { PRODUCTS } from "./data/products";
import { Layout } from "./components/Layout";
import { ProductPage } from "./pages/ProductPage";
import { useReducer } from "react";
import { UserThemeProvider } from "./state/UserThemeContext";
import { ConnectedHeader } from "./state/ConnectedHeader";
import { ConnectedCheckoutPage } from "./state/ConnectedCheckoutPage";
import { ConnectedOrderHistoryPage } from "./state/ConnectedOrderHistoryPage";
import { cartReducer } from "./state/cartReducer";

const getCartCount = (items: CartItem[]): number => {
  return items.reduce((sum, item) => sum + item.quantity, 0);
};

const App = (): React.JSX.Element => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  const handleAddToCart = (product: Product): void => {
    dispatch({ type: "ADD_ITEM", productId: product.id });
  };

  const handleIncrease = (productId: string): void => {
    dispatch({ type: "INCREASE", productId });
  };

  const handleDecrease = (productId: string): void => {
    dispatch({ type: "DECREASE", productId });
  };

  const handleRemoveItem = (productId: string): void => {
    dispatch({ type: "REMOVE_ITEM", productId });
  };

  const handleClear = (): void => {
    dispatch({ type: "CLEAR" });
  };

  return (
    <UserThemeProvider>
      <Layout header={<ConnectedHeader cartCount={getCartCount(cartItems)} />}>
        <ProductPage
          products={PRODUCTS}
          cartItems={cartItems}
          onAddToCart={handleAddToCart}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          onRemoveItem={handleRemoveItem}
          onClear={handleClear}
        />
        <div className="lower-panels">
          <ConnectedCheckoutPage items={cartItems} products={PRODUCTS} />
          <ConnectedOrderHistoryPage />
        </div>
      </Layout>
    </UserThemeProvider>
  );
};

export default App;
