import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function ToDo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

    const {list, handleSubmit, reset} = useForm()
 
  const handleAddTodo = () => {
    if (input) {
      setTodos([...todos, input]);
      setInput('');
      axios.post("http://localhost:3000/list")
      reset()
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
        <h1>ToDo List App</h1>
      <input type='text' value={input} onChange={(e) => setInput(e.target.value)} {...list}/>
      <button className='btn btn-primary ms-2' onSubmit={handleSubmit} onClick={handleAddTodo}>Add</button>
      <ul className='fw-bold fs-4'>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button className='ms-2 mb-2 mt-2' onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
