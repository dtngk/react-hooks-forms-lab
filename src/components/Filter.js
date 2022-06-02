import React from "react";

/**
 * onCategoryChange is ShoppingList.js handleCategory function
 * onSearchChange is ShoppingList.js filterChange function
 * search is ShoppingList.js filterWord useState variable
 * category is ShoppingList.js selectedCategory useState variable
 */
function Filter( {onCategoryChange, onSearchChange, search, category} ) {

  return (
    <div className="Filter">
      <input 
          type="text" 
          name="search" 
          placeholder="Search..."
          value = {search}   
          onChange={onSearchChange}
      />
      <select name="filter" onChange={onCategoryChange} value={category}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
