import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function CategoryFilter({selectedCategory, categories, onCategoryChange}) {
  
  function handleClick(event) {
    onCategoryChange(event.target.innerText);
  }

  const categoryButtons = categories.map( (category)=>{
    return(
      <button key={uuid()}
       onClick={handleClick} 
       className={category === selectedCategory ? "selected": null}> 
        {category}
      </button>
    );
  } );

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;

