import './NewTodoForm.css';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todosState } from './atoms';
import { addTodoCreator } from './creators';

function NewTodoForm() {
    const addTodo = addTodoCreator(useRecoilState(todosState));
    const [title, setTitle] = useState("");

    return (
        <>
        <h1>New Todo</h1>
            <div>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)}></input>
                <button onClick={() => {
                            addTodo({"title": title});
                            setTitle("");
                        }}>Add</button>
            </div>
        </>
    );
}

export default NewTodoForm;
