import React from "react";
import './TodoItem.scss';

export function TodoItem({ todo, toggleTodo, removeTodo }) {
  const { id, task, completed } = todo;
  const handleTodoClick = () => {
    toggleTodo (id);
  };

const remove = () => {
  removeTodo(todo)
}

  return (
    <div className="todoItem-main-container">
      <div className="left-side">
        <input className="form-check-input" type="checkbox" checked={completed} onChange={handleTodoClick}/>
        <label className="form-check-label" for="flexRadioDefault1">
          {task}
        </label>
      </div>
      <div className="right-side">
        <button onClick={remove} type='button'>&#10006;</button>
      </div>
    </div>
  );
}
