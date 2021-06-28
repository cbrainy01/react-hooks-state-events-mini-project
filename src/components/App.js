import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  function handleCategoryChange(selectionText) {
    setSelectedCategory(selectionText);
  }

  function addNewTask(newText, newCategory) {
    const newTask = {
      text: newText,
      category: newCategory,
    }
    setTasks([...tasks, newTask]);
  }
  
  function handleDelete(textOfDelete) {
    const newArray = tasks.filter((task)=>{return task.text !== textOfDelete});
    setTasks(newArray);
  }
    

  return ( 
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} categories={CATEGORIES}/>
      <NewTaskForm onTaskFormSubmit={addNewTask} categories={CATEGORIES}/>
      <TaskList onDeleteTask={handleDelete} 
      tasks={
        tasks.filter(
        (task) => {return selectedCategory === "All" || task.category === selectedCategory}
        ) 
      } 
      CATEGORIES={CATEGORIES}/>
    </div>
  );
}

export default App;

// function handleCategoryInput(input){
  //   setCategoryInput(input);
  // }
  // function handleDetailsInput(input) {
  //   setDetailsInput(input);
  // }
  