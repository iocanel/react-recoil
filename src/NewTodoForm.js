import './NewTodoForm.css';
import React, { useState } from 'react';

function NewTodoForm({add}) {
    const [title, setTitle] = useState('');
    return (
        <>
        <h1>New Todo</h1>
            <div>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)}></input>
                <button onClick={() => {
                            add({"title": title});
                            setTitle("");
                        }}>Add</button>
            </div>
        </>
    );
}

export default NewTodoForm;
