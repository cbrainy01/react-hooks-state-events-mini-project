import React from "react";


function Task({text, category, onDeleteTask}) {
  
function handleClick(event) {
  console.log("TEST: ", event.target.id)
  onDeleteTask(event.target.id);
}

  return (
    <div className="task">
      <div className="label">
        {category}
      </div>
      <div className="text">
        {text}
      </div>
      <button onClick={handleClick} id={text} className="delete">X</button>
    </div>
  );
}

export default Task;
