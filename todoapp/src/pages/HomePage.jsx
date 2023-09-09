import React, { createContext, useContext, useState } from 'react';
import PostAddIcon from '@mui/icons-material/PostAdd';
import Todo from '../components/Todo';

export const MyContext = createContext();

function HomePage() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');

  const handleValue = () => {
   setTodos([...todos, value])
   setValue('')
  }

  console.log(value)
  console.log(todos)

  return (
    <div className='headerDiv'>
      <div className='headerTodo'>
        <div>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={handleValue}>
            <PostAddIcon />
          </button>
        </div>
      </div>
      <div className='mainTodo'>
        <MyContext.Provider value={{ todos, setTodos }}>
          <Todo className='todoList' />
        </MyContext.Provider>
      </div>
    </div>
  );
}

export default HomePage;
