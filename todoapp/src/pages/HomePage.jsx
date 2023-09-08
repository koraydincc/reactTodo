import React from 'react'
import PostAddIcon from '@mui/icons-material/PostAdd';
import Todo from '../components/Todo';

function HomePage() {
  return (
    <div className='headerDiv'>
       <div className='headerTodo'>
            <div>
               <input type="text" />
               <button><PostAddIcon></PostAddIcon></button>
            </div>
       </div>
       <div className='mainTodo'>
          <Todo></Todo>
       </div>

    </div>
  )
}

export default HomePage
