import React, { useState, useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';
import TodoList from './TodoList';
import NewTodoForm from './NewTodoForm';

function App() {
    const [todos, setTodos] = useState([]);

    useEffect (() => {
        //Read todos.json from 'public'
        fetch("./todos.json")
            .then(res => res.json())
            .then(data => setTodos(data));
    }, []);

    const add = (newTodo) => {
        setTodos(todos => [...todos, newTodo]);
    };

    const remove = (title) => {
        setTodos(todos.filter(todo => todo.title !== title));
    }
    
    return (
    <RecoilRoot>
            <>
                <div className="App">
                    <h1>Todo App </h1>
                    <NewTodoForm/>
                    <TodoList/>
                </div>
            </>
    </RecoilRoot>
    );
}

export default App;
