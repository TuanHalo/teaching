# React Events sandbox

A one-page map of parent and child components. Boxes are labelled. There is no shop catalogue - only **buttons** and **text**.

Use this before the React Store lesson. It teaches: events, props down more than one layer, a loop of the same child, and conditional rendering (a button or text that appears in another box).

## Open locally

```bash
cd react-event
npm install
npm run dev
```

Pinned versions match the teaching materials. Do not add Redux or Context.

## Layout

- Outer box: `App` (parent)
- Blue: `Header`
- Yellow: `ProductPage` > `ProductList` loops three `ProductCard`s, `Cart` beside them
- Green: `Checkout`
- Pink: `Order history`

## The starter bug (intentional)

`App.tsx` keeps `count`, `pendingCard`, `cartText`, `trail`, `showNext`, `checkoutText`, and `orderText` as **frozen constants**. Handlers exist but are empty.

- **Open / Hide** on a card already works. That click stays in the child. Do not lift it.
- **Send**, **Ping**, **Confirm**, and **Next** do nothing on screen. That is the teaching point: the button fired; App never stored a new fact; other boxes did not change.

## Rules

- Do not add files. Do not rename exports.
- Named handlers only - no inline `onClick={() => ...}` in JSX.
- Keep handler names: `handleSend`, `handleConfirm`, `handlePing`, `handleNext`.
- `onSend` is passed App > ProductPage > ProductList > ProductCard.
- Cart does not import ProductCard. Checkout does not import Header.
- Empty text is `-` (`EMPTY` in `src/data/cards.ts`).
- Do not add Context or Redux.

## Assignment 1 - Send reaches Cart

**File:** `src/App.tsx`

`handleSend` is empty. `pendingCard` is a frozen `null`.

1. Change `pendingCard` to `useState<number | null>(null)`.
2. Fill `handleSend` so it stores the card number and sets the trail.

Names to keep: `pendingCard`, `setPendingCard`, `handleSend`, `trail`.

**Done when:**

- Click **Send** on Card 2. Cart shows **Confirm 2**. Header still says Count 0.
- Click **Send** on Card 1. Cart shows **Confirm 1** instead.
- Open / Hide on a card still only changes that card's text to `Local`.

**Question:** Did the card write into Cart itself?

## Assignment 2 - Confirm writes text

**File:** `src/App.tsx`

After Send, Cart has a button but the text is still `-`.

1. Change `count` and `cartText` to `useState`.
2. Fill `handleConfirm`. If `pendingCard` is null, return. Then set cart text to `Confirmed N`, add 1 to count, and clear `pendingCard`.

**Done when:**

- Send on Card 2, then **Confirm 2**. Cart text is `Confirmed 2`. header is `Count 1`. Confirm button is gone.
- Send on Card 3, Confirm 3. Cart text is `Confirmed 3`. Header is `Count 2`.

**Question:** When you close nothing - you only hide Confirm - did Count reset? (It should not.)

## Assignment 3 - Ping, then Next

**File:** `src/App.tsx`

A second chain, other boxes.

1. Change `showNext`, `checkoutText`, and `orderText` to `useState`.
2. Fill `handlePing` so Checkout shows **Next**.
3. Fill `handleNext` so Checkout text is `Header started this`, Order history text is `Reached the last child`, and Next goes away.

**Done when:**

- Click **Ping** in Header. Checkout shows **Next**. Order history is still `-`.
- Click **Next**. Checkout text is `Header started this`. Order history is `Reached the last child`. Next is gone.
- Send / Confirm still work. Ping does not change Count.

**Question:** Can Header shout into Order history directly, or only through App?
