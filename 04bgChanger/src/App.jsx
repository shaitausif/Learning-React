import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState('olive')

  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='flex flex-wrap justify-center fixed bottom-12 items-center inset-x-1 px-2 py-1'>
        <div className='flex flex-wrap justify-center items-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
          <button onClick={()=>setcolor('red')} className='bg-red-600 text-white px-2 py-1 rounded-full shadow-lg'>Red</button>
          <button onClick={()=>setcolor('green')} className='bg-green-600 text-white px-2 py-1 rounded-full shadow-lg'>Green</button>
          <button onClick={()=>setcolor('blue')} className='bg-blue-600 text-white px-2 py-1 rounded-full shadow-lg'>Blue</button>
          </div>
      </div>
    </div>
    
    </>
  )
}

export default App
