import React from "react";

export function TodoItem({ todo, toggleTodo }) {
  const { id, task, completed } = todo;

  const handleTodoClick = () => {
    toggleTodo (id);
  };

  
  // const handleClearItem = () =>{
  //   const newTodos = todos.filter((todo) => !todo.completed);
  //   setTodos(newTodos);
  // };

  return (
    <li>
      <input type="checkbox"  checked={completed} onChange={handleTodoClick}/>
      {task}
      <button>&#10006;</button>
    </li>
  );
}
