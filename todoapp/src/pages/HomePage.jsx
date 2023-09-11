import React, { createContext, useContext, useEffect, useState } from 'react';
import PostAddIcon from '@mui/icons-material/PostAdd';
import Todo from '../components/Todo';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

export const MyContext = createContext();

function HomePage() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');
  const [selectValue, setSelectValue]=useState('')
  const [success, setSuccess]=useState(false)
  const [idCounter, setIdCounter] = useState(1);
  const [precedence, setPrecedence] = useState('')



  const handleValue = () => {
    if (value.trim() !== '') {
      const newTodo = {
        id: idCounter, 
        text: value,
        category: selectValue,
        success: success,
        precedence:precedence 
      };
      
      if (selectValue === '') {
        alert('Lütfen alan seçiniz')
        return false
        
      }

      setTodos([...todos, newTodo]);
      setValue('');
      setIdCounter(idCounter + 1); // idCounter'ı bir artırarak bir sonraki id'yi hazırla
    }
  };

  const handleChange = (event) => {
    const selectedValue = event.target.value
    setSelectValue(selectedValue)

   
  }

  const handlePrecedence = (event) => {
    const selectedPrecedence = event.target.value
    setPrecedence(selectedPrecedence)
  }

  useEffect(()=>{
    console.log(selectValue)
  },[selectValue])

  return (
    <div className='headerDiv'>
      <div className='headerTodo'>
        <div>
          <input
          placeholder='Bir Görev Giriniz...'
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
         
          <FormControl>
              <InputLabel id="demo-simple-select-label">Alan Seçimi</InputLabel>
              <Select
                className='selectBox'
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectValue}
                label="Alan Seçimi"
                onChange={handleChange}
              >
                <MenuItem value='Spor'>Spor</MenuItem>
                <MenuItem value='Kişisel'>Kişisel</MenuItem>
                <MenuItem value='İş'>İş</MenuItem>
                <MenuItem value='Ev'>Ev</MenuItem>
              </Select>
             
          </FormControl>
  
          <FormControl>
                  <InputLabel className='precedenceBox' id="demo-simple-select-label">Öncelik Sırası</InputLabel>
                      <Select
                        className='selectBox'
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={precedence}
                        label="Öncelik Sırası"
                        onChange={handlePrecedence}
                      >
                        <MenuItem value='Kısa Vade'>Kısa Vade</MenuItem>
                        <MenuItem value='Orta Vade'>Orta Vade</MenuItem>
                        <MenuItem value='Uzun Vade'>Uzun Vade</MenuItem>
                
                      </Select>
          </FormControl>
          <button onClick={handleValue}>
            <PostAddIcon />
          </button>
         

          
        </div>
      </div>
      <div className='mainTodo'>
        <MyContext.Provider value={{ todos, setTodos,idCounter, selectValue, success, setSuccess, idCounter, setIdCounter }}>
          <Todo />
        </MyContext.Provider>
      </div>
    </div>
  );
}

export default HomePage;
