import { useState } from "react";
import "./App.css";
import InputController from "./components/InputController";
import TodoController from "./components/TodoController";
function App() {
  const [inputVal, setInputVal] = useState("");

  const [todos, setTodos] = useState([]);

  function writeTodo(e) {
    let inputValue = e.target.value;
    setInputVal(inputValue);
  }

  function addTodo() {
    if (inputVal != "") {
      setTodos((prevTodos) => [inputVal,...prevTodos]);
      setInputVal("");
    }
  }
  function deleteTask(todoIndex) {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodos, prevTodosIndex) => {
        return prevTodosIndex != todoIndex;
      }),
    );
  }

  console.log(todos);

  return (
    <main>
      <h1> To Do List</h1>
      <InputController
        inputVal={inputVal}
        writeTodo={writeTodo}
        addTodo={addTodo}
      />
      <TodoController todos={todos} deleteTask={deleteTask} />
    </main>
  );
}

export default App;
