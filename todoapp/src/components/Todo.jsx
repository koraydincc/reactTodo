import React, { useContext } from 'react';
import { MyContext } from '../pages/HomePage';

function Todo() {
  const { todos, setTodos } = useContext(MyContext);

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <>
      <h2 className='title'>Todo List</h2>
      <div className='todo'>
        <ul>
          {todos.map((todo) => (
            <ul className='todo-content' key={todo.id}>
              <div className='todo-text'>
                <h4>{todo.id})</h4>
                {todo.text}
              </div>
              <div className='alan'>
                    {todo.category}
              </div>
              <div className='todo-actions'>
                {/* Düzenle düğmesini eklemek için */}
                <button>Düzenle</button>
                {/* Sil düğmesini düzgün hale getirmek için */}
                <button onClick={() => handleDelete(todo.id)}>Sil</button>
              </div>
            </ul>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todo;
