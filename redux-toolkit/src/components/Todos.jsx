import React, { use } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todos = () => {
    const todos = useSelector((state) => state.todos)
    
    const dispatch = useDispatch()


    
    

  return (
    <>
    <div className='my-5'>
    <ul className='list-none'>
    {
        todos.map((todo) =>(
            <li className='mt-3 w-[30vw] flex justify-between items-center bg-zinc-800 px-5 py-2 rounded' key={todo.id}>
                <div className='text-white'>{todo.text}</div>
                <button 
                onClick={() => dispatch(removeTodo(todo.id))}
                className='  border-0  py-1 px-2 ml-4 focus:outline-none hover:bg-white transition-all rounded text-md'
                >❌</button>
            </li>
                
           
        ))
    }
     </ul>
     </div>
    </>
  )
}

export default Todos
