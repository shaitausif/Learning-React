import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './contexts/index'
import { TodoForm, TodoItem } from './components/index'

function App() {
  const [todos, settodos] = useState([])

  const addTodo = (todo) => {
    settodos((prev) => [{ id : Date.now() , ...todo },...prev])
  }

  const updateTodo = (id, todo) => {
    settodos((prev) => prev.map((prevTodo) => ( prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) =>{
    settodos((prev) => prev.filter((prevTodo) =>(prevTodo.id !== id )))
  }

  const toggleComplete = (id) => {
    settodos((prev) => prev.map( (prevTodo) => (
      prevTodo.id === id ? {...prevTodo, completed : !prevTodo.completed } : prevTodo
    )))
  }
  

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if(todos && todos.length > 0){
      settodos(todos)
    }
  }, []) // This will render the component only for the first time
  
  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos))
  }, [todos])
  
  

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
     <div className='bg-[#172842] min-h-screen py-8'>
        <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
          <h1 className='text-2xl font-bold text-center mb-2 mt-2'>Manage your Todos</h1>
          <div className='mb-4'>
            {/* Todo Form goes */}
            <TodoForm />
          </div>
      <div className='flex flex-wrap gap-y-3'>
        {/* Loop and add todoItem here */}
      {
        todos.map((todo)=>(
            <div className='w-full' key={todo.id}>
              <TodoItem todo={todo} />
            </div>
        ))
      }
      </div>
     </div></div>
    </TodoProvider>
  )
}

export default App
