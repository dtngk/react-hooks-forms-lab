import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react";

/**
 * onItemFormSubmit is an App.js function
 */
function ItemForm( {onItemFormSubmit}) {

  const [name, setName] = useState("")
  const [category, setCategory] = useState("Produce")

  function createItem(event){
    event.preventDefault();

    if(name){
      const newItem = {
        id: uuid(), // the `uuid` library can be used to generate a unique id
        name,
        category,
      };

      /**
       * Calls App addItemForm function
       */
      onItemFormSubmit(newItem);

      /**
       * Clears input text box and puts default category to "Produce"
       */
      setName("");
      setCategory("Produce");
    }
  }

  function handleName(event){
    setName(event.target.value);
  }

  function handleCategory(event){
   setCategory(event.target.value);  
  }
  
  return (
    <form className="NewItem" onSubmit={createItem}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleName} value={name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategory} value={category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
