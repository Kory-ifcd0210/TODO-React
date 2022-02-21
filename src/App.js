import React, { Fragment, useState, useRef, useEffect } from 'react';

import { TodoList } from './components/TodoList/TodoList';
// import {Footer} from './components/Footer';
import style from './styles/style.scss';
import bg from './assets/img/bgimg.jpg';



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
    e.preventDefault() //this is to the form not open another page
    const task= todoTaskRef.current.value;
    todoTaskRef.current.value = ""; //lclear the input
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
      <div className="general-background d-flex flex-column">
        <div className="top-background">
          <div className="gradient" />
          <img src={bg} className="img-background" alt='back-img'/>
        </div>
      </div>
      <main className="main-container">
        <header className="main-header">
          <h1 className="main-header-title">TODO</h1>
        </header>
        <form>
          <input ref={todoTaskRef} type= "text" placeholder="New task"/>
          <div>
              <button type="submit" onClick={handleTodoAdd}>&#10004;</button>
              <TodoList todos={todos} toggleTodo={toggleTodo}/>
          </div>
        </form>
        <p>Te quedan {todos.filter((todo)=> !todo.completed).length}</p>
        <button onClick={handleClearAll}>Clear All completed</button>
      </main>
    </Fragment>
  );
}

export default App;
