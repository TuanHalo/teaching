import type React from "react";
import type { CartItem, Product } from "./types";
import { PRODUCTS } from "./data/products";
import { Layout } from "./components/Layout";
import { ProductPage } from "./pages/ProductPage";
import { UserThemeProvider } from "./state/UserThemeContext";
import { ConnectedHeader } from "./state/ConnectedHeader";
import { ConnectedCheckoutPage } from "./state/ConnectedCheckoutPage";
import { ConnectedOrderHistoryPage } from "./state/ConnectedOrderHistoryPage";
import { Provider } from "react-redux";
import { store, useAppDispatch, useAppSelector } from "./state/store";
import {
  addItem,
  clear,
  decrease,
  increase,
  removeItem,
} from "./state/cartSlice";

const getCartCount = (items: CartItem[]): number => {
  return items.reduce((sum, item) => sum + item.quantity, 0);
};

const StoreApp = (): React.JSX.Element => {
  const cartItems = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleAddToCart = (product: Product): void => {
    dispatch(addItem(product.id));
  };

  const handleIncrease = (productId: string): void => {
    dispatch(increase(productId));
  };

  const handleDecrease = (productId: string): void => {
    dispatch(decrease(productId));
  };

  const handleRemoveItem = (productId: string): void => {
    dispatch(removeItem(productId));
  };

  const handleClear = (): void => {
    dispatch(clear());
  };

  return (
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
  );
};

const App = (): React.JSX.Element => (
  <Provider store={store}>
    <UserThemeProvider>
      <StoreApp />
    </UserThemeProvider>
  </Provider>
);

export default App;
