import type React from "react";
import { EMPTY } from "./data/cards";
import { Checkout } from "./components/Checkout";
import { Header } from "./components/Header";
import { OrderHistory } from "./components/OrderHistory";
import { ProductPage } from "./components/ProductPage";

const count = 0;
const pendingCard: number | null = null;
const cartText = EMPTY;
const trail = EMPTY;
const showNext = false;
const checkoutText = EMPTY;
const orderText = EMPTY;

const App = (): React.JSX.Element => {
  const handleSend = (_card: number): void => {};

  const handleConfirm = (): void => {};

  const handlePing = (): void => {};

  const handleNext = (): void => {};

  return (
    <div className="board">
      <p className="caption">App — parent; the facts live here</p>
      <p className="trail">{trail}</p>
      <div className="stack">
        <Header count={count} onPing={handlePing} />
        <ProductPage
          pendingCard={pendingCard}
          cartText={cartText}
          onSend={handleSend}
          onConfirm={handleConfirm}
        />
        <div className="split">
          <Checkout
            showNext={showNext}
            checkoutText={checkoutText}
            onNext={handleNext}
          />
          <OrderHistory orderText={orderText} />
        </div>
      </div>
    </div>
  );
};

export default App;
