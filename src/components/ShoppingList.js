import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleFilter = (e) => {
    console.log(e.target.value);
    return e.target.value === "Dairy"
      ? setSelectedCategory("Dairy")
      : e.target.value === "Produce"
      ? setSelectedCategory("Produce")
      : e.target.value === "Dessert"
      ? setSelectedCategory("Dessert")
      : e.target.value === "All"
      ? setSelectedCategory("All")
      : "";
  };
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleFilter} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory === "All" &&
          items.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
          ))}
        {selectedCategory === "Dairy" &&
          items
            .filter((item) => item.category === "Dairy")
            .map((item) => (
              <Item key={item.id} name={item.name} category={item.category} />
            ))}
        {selectedCategory === "Produce" &&
          items
            .filter((item) => item.category === "Produce")
            .map((item) => (
              <Item key={item.id} name={item.name} category={item.category} />
            ))}
        {selectedCategory === "Dessert" &&
          items
            .filter((item) => item.category === "Dessert")
            .map((item) => (
              <Item key={item.id} name={item.name} category={item.category} />
            ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
