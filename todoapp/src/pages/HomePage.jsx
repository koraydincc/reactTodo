import React, { createContext, useContext, useState } from 'react';
import PostAddIcon from '@mui/icons-material/PostAdd';
import Todo from '../components/Todo';

export const MyContext = createContext();

function HomePage() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');
  const [idCounter, setIdCounter] = useState(1); // İlk id değeri 1 olarak başlasın

  const handleValue = () => {
    if (value.trim() !== '') {
      const newTodo = {
        id: idCounter, // id değeri idCounter ile atanır
        text: value,
      };

      setTodos([...todos, newTodo]);
      setValue('');
      setIdCounter(idCounter + 1); // idCounter'ı bir artırarak bir sonraki id'yi hazırla
    }
  };

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
        <MyContext.Provider value={{ todos, setTodos,idCounter }}>
          <Todo />
        </MyContext.Provider>
      </div>
    </div>
  );
}

export default HomePage;
