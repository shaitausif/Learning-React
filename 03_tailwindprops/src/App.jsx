import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-violet-500 text-white p-4 rounded-lg'>Vite + React with Tailwind..</h1>
      <Card userName={"Tausif Shaikh"}/>
      <Card userName="Nausheen Shaikh" />
      <Card userName="Unknown"/>
    </>
  )
}

export default App
