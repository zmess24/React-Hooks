import React, { useState } from 'react';
import ComponentLayout from './ComponentLayout';

function TodoList() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([{ body: "Learn hooks"}]);

    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, { body: todo }]);
        setTodo("");
    };

    return (
        <ComponentLayout headerText="Todo List">
            <form onSubmit={handleSubmit}>
                <label>Todo</label>
                <input value={todo} onChange={(e) => setTodo(e.target.value)}/>
            </form>
            <ul>
                {todos.map(({ body }, i) => {
                    return <li key={i}>{body}</li>
                })}
            </ul>
        </ComponentLayout>
    )
};

export default TodoList