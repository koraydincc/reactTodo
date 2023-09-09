import React, { useContext, useState } from 'react';
import { MyContext } from '../pages/HomePage';

function Todo() {
  const { todos, setTodos, idCounter, setIdCounter } = useContext(MyContext);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const newTodoItem = {
        id: idCounter, 
        text: newTodo,
      };

      setTodos([...todos, newTodoItem]);
      setNewTodo('');

      // idCounter'ı bir sonraki id için artır
      setIdCounter(idCounter + 1);
    }
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h2 className='title'>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li className='todo' key={todo.id}>
            {todo.text}
            <button>Düzenle</button>
            <button onClick={() => handleDelete(todo.id)}>Sil</button>
          </li>
        ))}
      </ul>
    
    </div>
  );
}

export default Todo;
