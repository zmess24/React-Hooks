import React, { useState } from 'react';
import ComponentLayout from './ComponentLayout';
import Todo from './Todo';

function TodoList() {
    const [todo, setTodo] = useState("");
    const [id, setId] = useState(1);
    const [todos, setTodos] = useState([{ todo: "Learn hooks", id: 0, complete: false}]);

    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos, { todo, id, complete: false }]);
        setId(id+1);
        setTodo("");
    };
    
    function handleDelete(id) {
        let filtered = todos.filter(t => { if (t.id !== id) return t });
        setTodos(filtered);
    }

    function handleComplete(todoToUpdate) {
        todoToUpdate.complete = !todoToUpdate.complete;
        let updatedTodos = todos.map(t => {
            return t.id === todoToUpdate.id ? todoToUpdate : t;
        })

        setTodos(updatedTodos);
    }

    return (
        <ComponentLayout headerText="Todo List">
            <form onSubmit={handleSubmit}>
                <label>Todo</label>
                <input 
                    value={todo} 
                    onChange={(e) => 
                    setTodo(e.target.value)}
                    placeholder="Enter a todo..."/>
            </form>
            <ul>
                {todos.map(t => {
                    return (
                        <Todo 
                            key={t.id}
                            todo={t} 
                            handleComplete={handleComplete}
                            handleDelete={handleDelete} />
                        )
                })}
            </ul>
        </ComponentLayout>
    )
};

export default TodoList