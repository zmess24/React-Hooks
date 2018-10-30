import React from 'react';
import './Todo.css';

export default ({ todo, handleComplete, handleDelete }) => {
    return (
        <li className="todo-item">
            <input type="checkbox" checked={todo.complete} onChange={() => handleComplete(todo)}/>
            {todo.todo}
            <i className="fas fa-trash" onClick={() => handleDelete(todo.id)} />
        </li>
    )
};