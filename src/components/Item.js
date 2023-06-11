import React, { useState } from "react";

function Item({ name, category }) {
  const [isIn, setIsIn] = useState(false);
  const addItem = () => {
    isIn ? setIsIn(false) : setIsIn(true);
  };

  return (
    <li className={isIn ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addItem}>
        {isIn ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
