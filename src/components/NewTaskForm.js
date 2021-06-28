import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({categories, onTaskFormSubmit}) {

   const [newTaskText, setNewTaskText] = useState("");
   const [newTaskCategory, setNewTaskCategory] = useState("code");

  const omitAll = categories.filter( (category)=>{return category !== "All"} );
  const optionList = omitAll.map( (category)=>{
    return(
      <option key={uuid()} value={category}>{category}</option>
    );
  } );

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit(newTaskText, newTaskCategory);
  }

  function handleDetailChange(event) {
    const text = event.target.value;
    console.log(text);
    setNewTaskText(text)
  }
  function handleCategoryChange(event) {
    const cgory = event.target.value;
    console.log(cgory);
    setNewTaskCategory(cgory);
  }

  //console.log("TEST: ", handleDetailChange());

  return (
    <form  onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleDetailChange} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleCategoryChange} name="category">
          {optionList}
        </select>
      </label>
      <input  type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

  // function userInput() {
  //   onDetailsInput(getUserDetailInput)
  //   onCategoryInput(getUserCategoryInput);
  // }
  // function getUserDetailInput(event) {
  //  // onDetailsInput
  //  const text = (event.target.value);
  //  return text
  // }
  // function getUserCategoryInput(event) {
  //  // onCategoryInput
  //   const cgory = (event.target.value);
  //   return cgory;
  // }
