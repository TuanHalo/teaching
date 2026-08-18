import type React from "react";
import type { CartItem, Product } from "./types";
import { PRODUCTS } from "./data/products";
import { Layout } from "./components/Layout";
import { ProductPage } from "./pages/ProductPage";
import { useState } from "react";
import { UserThemeProvider } from "./state/UserThemeContext";
import { ConnectedHeader } from "./state/ConnectedHeader";
import { ConnectedCheckoutPage } from "./state/ConnectedCheckoutPage";
import { ConnectedOrderHistoryPage } from "./state/ConnectedOrderHistoryPage";

const getCartCount = (items: CartItem[]): number => {
  return items.reduce((sum, item) => sum + item.quantity, 0);
};

const App = (): React.JSX.Element => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product): void => {
    const existing = cartItems.find((item) => item.productId === product.id);
    if (existing) {
      setCartItems((prev) => {
        return prev.map((item) =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      });
      return;
    }
    setCartItems((prev) => [...prev, { productId: product.id, quantity: 1 }]);
  };

  const handleIncrease = (productId: string): void => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  };

  const handleDecrease = (productId: string): void => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const handleRemoveItem = (productId: string): void => {
    setCartItems((prev) => prev.filter((item) => item.productId !== productId));
  };

  const handleClear = (): void => {
    setCartItems([]);
  };

  return (
    <UserThemeProvider>
      <Layout
        header={
          <ConnectedHeader cartCount={getCartCount(cartItems)} />
        }
      >
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
