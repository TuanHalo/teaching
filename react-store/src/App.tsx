import type React from "react";
import type { CartItem, Product, ThemeName, User } from "./types";
import { PRODUCTS } from "./data/products";
import { Layout } from "./components/Layout";
import { Header } from "./components/Header";https://github.com/TuanHalo/teaching/pull/1/conflict?name=react-store%252Fsrc%252Fcomponents%252FHeader.tsx&ancestor_oid=99f51c041efbeb224d638b609fb5f53786c02298&base_oid=e501963f44a227f91000615e1adaf3dd6df637e2&head_oid=d1c5e88ca585851e5d2ce3a0e8a4393b4ebb085e
import { CheckoutPage } from "./components/CheckoutPage";
import { OrderHistoryPage } from "./components/OrderHistoryPage";
import { ProductPage } from "./pages/ProductPage";


let user: User | null = null;
let theme: ThemeName = "light";

const getCartCount = (items: CartItem[]): number => {
  return items.reduce((sum, item) => sum + item.quantity, 0);
};

const App = (): React.JSX.Element => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product): void => {
    const existing = cartItems.find((item) => item.productId === product.id);
    if (existing) {
      setCartItems((prev) =>
        prev.map((item) =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      return;
    }
    setCartItems(prev => [...prev, { productId: product.id, quantity: 1 }]);
  };

  const handleIncrease = (productId: string): void => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecrease = (productId: string): void => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0));
  };

  const handleRemoveItem = (productId: string): void => {
    setCartItems((prev) => prev.filter((item) => item.productId !== productId));
  };

  const handleClear = (): void => {
    setCartItems(() => []);
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
    <UserThemeProvider>
    <Layout
      theme={theme}
      header={
        <Header
          cartCount={getCartCount(cartItems)}
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
        <OrderHistoryPage user={user} orders={[]} />
      </div>
    </Layout>
    </UserThemeProvider>
  );
};

export default App;
