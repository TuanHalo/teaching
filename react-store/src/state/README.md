# State folder

Files here are named for later assignments. Do not import them until that assignment — App.tsx still owns cart, user, and theme as module variables.

## This session (state)

- **Assignment 3** — `UserThemeContext.tsx` (`UserThemeProvider`, `useUserTheme`, `login`, `logout`, `toggleTheme`). Wire `ConnectedHeader.tsx`, `ConnectedCheckoutPage.tsx`, `ConnectedOrderHistoryPage.tsx`. Inner component name is `StoreApp`.
- **Assignment 4** — `cartReducer.ts` (`CartAction`, `cartReducer`). Action types: `ADD_ITEM`, `REMOVE_ITEM`, `INCREASE`, `DECREASE`, `CLEAR`.
- **Assignment 5** — `cartSlice.ts` (`addItem`, `removeItem`, `increase`, `decrease`, `clear`) and `store.ts` (`store`, `useAppDispatch`, `useAppSelector`).
- **Assignment 6** — `src/storage/persist.ts` (`loadCart`, `saveCart`). Key: `react-store-cart`.

Keep presentational components under `src/components/` free of state libraries.

## Next session (events)

Do not import these during the state session. Checkout still shows "Payment is not implemented."

- **Assignment 7** — `CheckoutForm.tsx` (`handlePlaceOrder`, `canPlaceOrder`, `handleSubmit`) plus `Order` in `types.ts` and `orders` on `OrderHistoryPage`.
- **Assignment 8** — `handlePromoChange`, `isPromoValid`, `getDiscountedTotal`. Valid code: `SAVE10`.
- **Assignment 9** — `handleAgreeChange`, `hasAgreed`. Place order stays disabled until the checkbox is on.
- **Assignment 10** — `ProductSearch.tsx` (`handleSearchChange`, `getFilteredProducts`).
- **Assignment 11** — `ClearCartConfirm.tsx` (`handleAskClear`, `handleConfirmClear`, `handleCancelClear`, `isConfirmingClear`).
- **Assignment 12** — `ProductCard` `inCartQuantity` and `getInCartQuantity` in `ProductList.tsx`. Change the button label only.
