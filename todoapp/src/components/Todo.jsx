import React, { useContext, useState } from 'react';
import { MyContext } from '../pages/HomePage';

function Todo() {
  const { todos, setTodos } = useContext(MyContext);
  


  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2 className='title'>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <ul className='todo' key={todo.id}>
            {todo.text}
            <button>Düzenle</button>
            <button onClick={() => handleDelete(todo.id)}>Sil</button>
          </ul>
        ))}
      </ul>
    
    </div>
  );
}

export default Todo;
