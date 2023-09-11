import React, { useContext } from 'react';
import { MyContext } from '../pages/HomePage';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

function Todo() {



  const { todos, setTodos, success, setSuccess } = useContext(MyContext);



  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleCheck = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        //diğer özelliklkeri aynı kalsın success özelliği tersi olsun 
        return {
          ...todo,
          success: !todo.success
        };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  };
  



  return (
    <>
      <h2 className='title'>Todo List</h2>
      <div >
        <ul  className='todo'>
          {todos.map((todo) => (
            <ul style={{backgroundColor: todo.success ? '#A6FF96' : '#FFB7B7'}} className='todo-content' key={todo.id}>
              <div className='todo-text'  >
                <h4>{todo.id})</h4>
                <p style={{
                  textDecoration: todo.success ? 'line-through' : 'none'
                }}>{todo.text}</p>
              </div>
              <div className='checked'>
              <Checkbox
                   checked={todo.success}
                   onChange={() => handleCheck(todo.id)}
                  color='success'
                 />
              

             </div>
              <div className='category'>
                 ({todo.category})
              </div>
              <div className='todo-actions'>
                
                <button>Düzenle</button>
               
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
