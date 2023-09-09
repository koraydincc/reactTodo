import React, { useContext } from 'react'
import {MyContext} from '../pages/HomePage'

function Todo() {

  const {todos, setTodos} = useContext(MyContext)

  return (
    <div className='todoList'>
      <div>
        {todos.map((todo,index)=>{
          return (
            <li className='todo' key={index}>
               {todo}
               <button>Düzenle</button>
               <button>Sil</button>
            </li>
          )
        })}
      </div>
    </div>
  )
}

export default Todo
