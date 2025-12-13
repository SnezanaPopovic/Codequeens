import React, { useState, useCallback } from "react";
import { products } from "../data/products";

const ProductFilter = () => {
  const [filtered, setFiltered] = useState(products);

  const filterByCategory = useCallback((category) => {
    if (category === "All") {
      setFiltered(products);
    } else {
      setFiltered(products.filter((p) => p.category === category));
    }
  }, []);

  return (
    <div>
      <h2>Filter proizvoda</h2>
      <div>
        {["All", "Food", "Clothes", "Tech"].map((cat) => (
          <button key={cat} onClick={() => filterByCategory(cat)}>
            {cat}
          </button>
        ))}
      </div>
      <ul>
        {filtered.map((item) => (
          <li key={item.id}>
            {item.name} – {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFilter;
