import React from 'react';
import "./TodoList.scss";
import { TodoItem } from '../TodoItem/TodoItem';


export function TodoList({ todos, toggleTodo }) {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
                ))}
        </ul>
    )
}
