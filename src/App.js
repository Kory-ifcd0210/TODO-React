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

  const handleRemoveTodo =(item) =>{
    const newTodos = todos.filter((todo) => todo.id !==item.id );
    setTodos(newTodos);
  }

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
              <button className='hidden' type="submit" onClick={handleTodoAdd}>&#10004;</button>
              <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={handleRemoveTodo}/>
          </div>
        </form>
        <footer className='footer-App'>
        <p>Te quedan {todos.filter((todo)=> !todo.completed).length}</p>
        <a onClick={handleClearAll}>Clear All completed</a>
        </footer>
      </main>
    </Fragment>
  );
}

export default App;
