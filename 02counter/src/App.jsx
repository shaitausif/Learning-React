import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // Any change in the state will re-render the whole component.

  return (
    <>
      <h1>React course by Hitesh Choudhary {count}</h1>
      <h2>Counter Value : {count}</h2>
      <button onClick={()=>{setCount(count + 1)}}>Add value </button>{" "}
      <button onClick={()=>{setCount(count - 1)}}>Remove value</button>
      <p>footer:{count}</p>
    </>
  )
}

export default App
