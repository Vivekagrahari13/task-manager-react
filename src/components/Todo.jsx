import React from "react";

function Todo({todo, index, deleteTask}) {
  return (
    <div className="todo">
      <p>{todo}</p>
      <div className="actions">
        <input type="checkbox"></input>
        <button onClick={()=>deleteTask(index)}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
