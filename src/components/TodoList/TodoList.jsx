import React from 'react';
import "./TodoList.scss";
import { TodoItem } from '../TodoItem/TodoItem';


export function TodoList({ todos, toggleTodo, removeTodo }) {
    const removeTodoHandle = (item) =>{
        console.log('borra item: ', item)
        removeTodo(item);
    }
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodoHandle} />
                ))}
        </div>
    )
}
