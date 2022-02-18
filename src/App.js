import React, { Fragment, useState, useRef, useEffect } from 'react';
import { TodoList } from './components/TodoList';


export function App() {
  const [todos, setTodos] = useState([  ]);


  const todoTaskRef = useRef();

  useEffect(()=>{
    const storedTodos = JSON.parse( localStorage.getItem("todoApp.todos"));
    if (storedTodos){
      setTodos(storedTodos);
  }
},[])


  useEffect(()=>{
    localStorage.setItem("todoApp.todos", JSON.stringify(todos))
  }, [todos])


  const toggleTodo = (id) =>{
    const newTodos =[...todos];
    const todo = newTodos.find((todo)=> todo.id ===id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }


  const handleTodoAdd = (e) => {
    const task= todoTaskRef.current.value;
    if (task === "") return;

    setTodos((prevTodos) =>{
      return [...prevTodos, {id: 1+Math.random(), task, completed: false}
      ]}
    );
  }

  const handleClearAll = () =>{
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <Fragment>
      <input ref={todoTaskRef} type= "text" placeholder="New task"/>
      <button onClick={handleTodoAdd}>&#10004;</button>
      <button onClick={handleClearAll}>&#10006;</button>
      <p>Te quedan {todos.filter((todo)=> !todo.completed).length}</p>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </Fragment>
  );
}

export default App;
