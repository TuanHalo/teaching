import type React from "react";
import type { Product } from "../types";

interface ProductSearchProps {
  products: Product[];
  onQueryChange: (query: string) => void;
  query: string;
}

export const getFilteredProducts = (
  products: Product[],
  query: string
): Product[] => {
  const needle = query.trim().toLowerCase();
  if (needle === "") {
    return products;
  }
  return products.filter((product) =>
    product.name.toLowerCase().includes(needle)
  );
};

// Assignment 10 — render this above the product cards in ProductList.
export const ProductSearch = ({
  products,
  query,
  onQueryChange,
}: ProductSearchProps): React.JSX.Element => {
  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    onQueryChange(event.target.value);
  };

  const matchCount = getFilteredProducts(products, query).length;

  return (
    <div className="field">
      <label htmlFor="product-search">Search products</label>
      <input
        id="product-search"
        type="search"
        value={query}
        onChange={handleSearchChange}
        autoComplete="off"
      />
      {query.trim() !== "" && matchCount === 0 ? (
        <p className="empty-state">No products match.</p>
      ) : null}
    </div>
  );
};
