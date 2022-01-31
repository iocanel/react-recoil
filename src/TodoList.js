
import React, { useState } from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';


function TodoList({todos, remove}) {
    return (
        <>
            {todos.map(todo => <TodoListItem todo={todo} remove={remove}/>)} 
        </>
    )
}

export default TodoList;
