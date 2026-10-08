import React from "react";
import Todo from "./Todo";

function TodoController({ todos, deleteTask }) {
  return(
  
  <div className="task-container"> 
  {
    todos.map(
      (todo, index)=>{
        return(
          <Todo todo={todo} index={index} deleteTask={deleteTask}/>
        )
      }
    )
  }
  </div>
  );
}

export default TodoController;
