import React, { useState } from 'react';
import '../styles/TodoAdd.css'

function TodoAdd({addTodo}) {

    const [todoValue, setTodoValue] = useState("");
    const submitTodo = () => {

        if(todoValue.trim()) {
            addTodo(todoValue.trim());
            setTodoValue("");
        }
    }

    const updateTodoValue = e => {
        setTodoValue(e.target.value)
        
    }
    return (
        <div className="grid-container">
            <textarea id="task" onChange={updateTodoValue} value={todoValue}></textarea>
            <br/>
            <button id="btn" onClick={submitTodo}>Add New</button>
        </div>
    );
}

export default TodoAdd;