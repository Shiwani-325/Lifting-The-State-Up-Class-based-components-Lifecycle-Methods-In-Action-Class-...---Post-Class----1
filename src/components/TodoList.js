import React from 'react';
import TodoListItem from './TodoListItem';
import '../styles/TodoList.css'

function TodoList({todos, deleteTodo, startEditing, finishEditing}) {
    const items = todos.map(function(single_todo) {
        return <TodoListItem key={single_todo.id} todo={single_todo} deleteTodo={deleteTodo} startEditing={startEditing} finishEditing={finishEditing}/>
    })

    return (
        <div>
            <ul className="container">
                {items}
            </ul>
        </div>
    );
}

export default TodoList;