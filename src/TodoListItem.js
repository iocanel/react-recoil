
import './TodoListItem.css';
import React from 'react';

function TodoListItem({todo, remove}) {
    return <><h3>{todo.title}</h3><button onClick={() => remove(todo.title)} >remove</button></>
}

export default TodoListItem;
