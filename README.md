---
title: "React Store — Assignments 1–12"
tags: [react, assignment, state-management, events, teaching]
created: 2026-08-16
modified: 2026-08-16
status: active
---

# React Store — Assignments

Sandbox: `sandboxes/react-store`

Do not add new files. Do not rename exports. Files for later assignments already exist — do not import them until that assignment says so.

Do not put Redux or Context inside `src/components/`.

---

## Rules

- Keep the existing handler names: `handleAddToCart`, `handleIncrease`, `handleDecrease`, `handleRemoveItem`, `handleClear`, `handleLogin`, `handleLogout`, `handleToggleTheme`, `getCartCount`.
- Named handlers only. No inline `onClick={() => ...}` in JSX.
- Login user is **Jane Citizen**. Do not change it.
- Do not rewrite `src/data/products.ts` or `src/styles/store.css`.
- Assignments 1–6: the UI stays the same. Only where the data lives changes.
- Assignments 7–12: do not re-assign Add to cart, login, or empty cart. Those already work. Promo, agree, search, and confirm stay **local `useState`**. Only `orders` is lifted to `App` / `StoreApp`. Do not add a new Context or Redux slice for 7–12.
- Call the helpers that already exist. Do not rewrite `isPromoValid`, `canPlaceOrder`, `getDiscountedTotal`, `getFilteredProducts`, or `getInCartQuantity`.
- Valid promo code is `SAVE10` (`PROMO_CODE` in `CheckoutForm.tsx`).

---

## Assignment 1 — Variable → `useState` in `ProductPage`

**Files:** `src/pages/ProductPage.tsx`, `src/App.tsx`

Move cart out of the module `let` in `App.tsx` into `useState` inside `ProductPage`.

Keep these names: `cartItems`, `setCartItems`, `handleAddToCart`, `handleIncrease`, `handleDecrease`, `handleRemoveItem`, `handleClear`.

**Done when:**

- Add to cart updates CartPanel.
- Header still shows `Cart (0)`.
- Login and theme still do nothing.

---

## Assignment 2 — Lift cart to `App`

**Files:** `src/App.tsx`, `src/pages/ProductPage.tsx`

Header and ProductPage are siblings. Props only go down. Move cart to `App`, then pass `cartItems` and the `handle*` functions down.

- Header gets `cartCount={getCartCount(cartItems)}`.
- Checkout gets `items={cartItems}`.

**Done when:**

- Add to cart updates Header `Cart (n)` and CartPanel together.
- Checkout shows the same items.
- Login and theme still do not update the UI.

---

## Assignment 3 — Context for user and theme

**Files:**

- `src/state/UserThemeContext.tsx`
- `src/App.tsx`
- import `ConnectedHeader`, `ConnectedCheckoutPage`, `ConnectedOrderHistoryPage`

Fill `UserThemeProvider` and `useUserTheme`. Context methods must be named `login`, `logout`, `toggleTheme`.

Rename the inner component to `StoreApp`. Cart stays `useState` in `StoreApp`.

**Done when:**

- Log in as Jane Citizen updates Header, Checkout, and Order history.
- Theme toggle flips Layout.
- Add to cart does not go through Context.

---

## Assignment 4 — `useReducer` for cart

**Files:** `src/state/cartReducer.ts`, `src/App.tsx`

Fill `cartReducer`. Action types must stay:

`ADD_ITEM` · `REMOVE_ITEM` · `INCREASE` · `DECREASE` · `CLEAR`

`StoreApp` calls `useReducer(cartReducer, [])`. The existing `handle*` functions dispatch those actions.

User and theme stay in Context.

**Done when:**

- Every cart button still works.
- You can point at one function that decides the next cart array.
- Cart is still owned by `StoreApp`, not a global store.

---

## Assignment 5 — Redux Toolkit for cart

**Files:** `src/state/cartSlice.ts`, `src/state/store.ts`, `src/App.tsx`

Fill slice reducers: `addItem`, `removeItem`, `increase`, `decrease`, `clear`.

Wrap with `Provider` and `store`. `StoreApp` uses `useAppSelector` and `useAppDispatch`.

User and theme stay in Context. Presentational components stay unaware of Redux.

**Done when:**

- Cart behaviour matches Assignment 4.
- Login does not go through Redux.

---

## Assignment 6 — Persist cart

**Files:** `src/storage/persist.ts`, `src/state/cartSlice.ts`, `src/App.tsx`

Implement `loadCart` and `saveCart`.

- localStorage key must be `react-store-cart`.
- Slice `initialState` is `loadCart()`.
- `useEffect` calls `saveCart` when the selected cart changes.

**Done when:**

- Add items, refresh, Header `Cart (n)` and CartPanel come back.
- User is logged out after refresh.

---

## Assignment 7 — Place order

**Files:**

- `src/components/CheckoutForm.tsx`
- `src/components/CheckoutPage.tsx`
- `src/App.tsx` (or `StoreApp`)
- `src/types.ts` (`Order` is already declared)
- `src/components/OrderHistoryPage.tsx`

The shells already exist. Import them. Convert `const` placeholders to `useState`.

1. Render `CheckoutForm` in `CheckoutPage` instead of “Payment is not implemented in this sandbox.”
2. In `App` / `StoreApp`, add `orders` state and `handlePlaceOrder`.
3. `handlePlaceOrder` appends an `Order` (`id`, `items`, `total`) and clears the cart.
4. Pass `orders` into `OrderHistoryPage`.

Names to keep: `CheckoutForm`, `handlePlaceOrder`, `canPlaceOrder`, `handleSubmit`, `onPlaceOrder`, `Order`, `orders`.

**Done when:**

- Logged in, cart has items, Place order is still disabled until Assignment 9.
- After Assignment 9: submit adds a row in Order history and the cart is empty.

---

## Assignment 8 — Promo code

**File:** `src/components/CheckoutForm.tsx`

`promoCode` is a `const ""` today. Change it to `useState`. Fill `handlePromoChange`.

Valid code is `SAVE10`. Call `isPromoValid` and `getDiscountedTotal`.

**Done when:**

- Typing `SAVE10` shows “SAVE10 applied — 10% off” and the total drops 10%.
- Any other non-empty value shows “That code is not valid.”
- Empty input shows neither message.

---

## Assignment 9 — Agree to terms

**File:** `src/components/CheckoutForm.tsx`

`hasAgreed` is a `const false` today. Change it to `useState`. Fill `handleAgreeChange`.

`canPlaceOrder(user, items, hasAgreed)` is already: logged in, cart not empty, and agreed.

**Done when:**

- Place order stays disabled until the checkbox is on (and you are logged in with items).
- Then submit works with Assignment 7.

---

## Assignment 10 — Search products

**Files:** `src/components/ProductSearch.tsx`, `src/components/ProductList.tsx`

Render `ProductSearch` above the product cards. Hold `query` in `ProductList` with `useState`. Pass `query` and `onQueryChange`.

Map `getFilteredProducts(products, query)`, not the raw list.

Names to keep: `ProductSearch`, `handleSearchChange`, `getFilteredProducts`.

**Done when:**

- Typing `tea` shows only Tea.
- Typing `zzz` shows “No products match.”
- Clearing the search shows all three products.

---

## Assignment 11 — Confirm clear cart

**Files:** `src/components/ClearCartConfirm.tsx`, `src/components/CartPanel.tsx`

Replace the Clear cart button with `ClearCartConfirm`.

`isConfirmingClear` is a `const false` today. Change it to `useState`. Fill `handleAskClear` and `handleCancelClear`.

`handleConfirmClear` already calls `onConfirm`.

**Done when:**

- First click asks “Clear the cart?”
- Cancel returns to Clear cart and keeps items.
- Yes, clear empties the cart.

---

## Assignment 12 — In-cart label

**File:** `src/components/ProductCard.tsx`

`inCartQuantity` is already passed from `ProductList` via `getInCartQuantity`. The button still always says “Add to cart”. Change only the label.

**Done when:**

- Coffee not in the cart: `Add to cart`.
- After adding: `In cart (1)` (or `Add another` — pick one label and use it for every product).
- Quantity 2 shows `In cart (2)`.
