import type React from "react";
import type { CartItem, Product, ThemeName, User } from "./types";
import { PRODUCTS } from "./data/products";
import { Layout } from "./components/Layout";
import { Header } from "./components/Header";
import { CheckoutPage } from "./components/CheckoutPage";
import { OrderHistoryPage } from "./components/OrderHistoryPage";
import { ProductPage } from "./pages/ProductPage";
import { useState } from "react";

let user: User | null = null;
let theme: ThemeName = "light";

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
                ? {...item, quantity: item.quantity + 1}
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

  const handleLogin = (): void => {
    user = { name: "Jane Citizen" };
  };

  const handleLogout = (): void => {
    user = null;
  };

  const handleToggleTheme = (): void => {
    theme = theme === "light" ? "dark" : "light";
  };

  return (
    <Layout
      theme={theme}
      header={
        <Header
          cartCount={getCartCount(cartItems)}
          user={user}
          theme={theme}
          onToggleTheme={handleToggleTheme}
          onLogin={handleLogin}
          onLogout={handleLogout}
        />
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
        <CheckoutPage user={user} items={cartItems} products={PRODUCTS} />
        <OrderHistoryPage user={user} />
      </div>
    </Layout>
  );
};

export default App;
