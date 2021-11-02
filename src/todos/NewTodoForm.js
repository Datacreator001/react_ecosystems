import React, {useState} from 'react'

export default function NewTodoForm() {
const [inputValue,setInputValue]=useState('')

    return (
        <div className="new-todo-form">
            <input className="new-todo-input" 
            type='text'
            placeholder="Type your new Todo Here"
            value={inputValue}
            onChange={e=>setInputValue(e.target.value)}
            />
            <button className="new-todo-btn">Create Todo</button>
        </div>
    )
}


