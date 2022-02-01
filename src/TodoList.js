import './TodoList.css';
import TodoListItem from './TodoListItem';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { todosState } from './atoms';
import { removeTodoCreator } from './creators';


function TodoList() {
    const [todos, setTodos] = useRecoilState(todosState);
    const removeTodo = removeTodoCreator([todos, setTodos]);
     useEffect (() => {
        //Read todos.json from 'public'
        fetch("./todos.json")
            .then(res => res.json())
            .then(data => setTodos(data));
    }, []);


    return (
        <>
            {todos.map(todo => <TodoListItem todo={todo} remove={removeTodo}/>)} 
        </>
    )
}

export default TodoList;
