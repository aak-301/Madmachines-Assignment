import React, { useState, useEffect } from "react";
import "./styles/ItemList.css";
import { items } from "./constants/ListItems";
import { categories } from "./constants/Categories";

const ItemList = () => {
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Default");
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    let updatedItems = [...items];

    if (filter !== "All") {
      updatedItems = updatedItems.filter((item) => item.category === filter);
    }

    if (sort === "Price Low to High") {
      updatedItems.sort((a, b) => a.price - b.price);
    } else if (sort === "Price High to Low") {
      updatedItems.sort((a, b) => b.price - a.price);
    } else if (sort === "Name A to Z") {
      updatedItems.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredItems(updatedItems);
  }, [filter, sort]);

  return (
    <div className="container">
      <div className="filter-sort">
        <label>
          Filter by Category:
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            {categories.map((c) => {
              return <option value={c}>{c}</option>;
            })}
          </select>
        </label>
        <label>
          Sort by:
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="Default">Default</option>
            <option value="Price Low to High">Price Low to High</option>
            <option value="Price High to Low">Price High to Low</option>
            <option value="Name A to Z">Name A to Z</option>
          </select>
        </label>
      </div>
      <div className="grid">
        {filteredItems.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p className="category">Category: {item.category}</p>
            <p className="description">{item.description}</p>
            <p className="price">₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
