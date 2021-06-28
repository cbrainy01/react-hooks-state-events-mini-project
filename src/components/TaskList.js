import React, { useState } from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

function TaskList({tasks, onDeleteTask}) {
  
console.log(tasks)
 const taskList = tasks.map( (task)=>
   (<Task onDeleteTask={onDeleteTask} key={uuid()} text={task.text} category={task.category}/>)
  );

  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
