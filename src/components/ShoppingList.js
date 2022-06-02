import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

/**
 * onItemFormSubmit is App.js addItemForm function
 * items is App.js useState variable
 */
function ShoppingList({ items, onItemFormSubmit}) {
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterWord, setFilterWord] = useState("");

  /**
   * Calls by Filter.js on filtering between "Produce", "Dairy" and "Dessert"
   */
  function handleCategory(event){
    setSelectedCategory(event.target.value);
  }

  /**
   * Calls by Filter.js on text input change
   */
  function filterChange(event){
    setFilterWord(event.target.value);
  }

  /**
   * Displays the correct lists of items after filtering. First it filters by category and 
   * then by user input.
   */
  const itemsToDisplay = items.filter(
                  (item) => selectedCategory === "All" || item.category === selectedCategory)
                  .filter((item) => item.name.toUpperCase().includes(filterWord.toUpperCase()));
  
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategory} 
              onSearchChange={filterChange} 
              search={filterWord} 
              category={selectedCategory}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
