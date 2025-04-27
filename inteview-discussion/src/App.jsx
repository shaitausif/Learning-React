import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // First Question
  // const [value, setvalue] = useState(1)
  // const [multipliedvalue, setmultipliedvalue] = useState(1)
  // Instead of using a seperate state for multipliedvalue which will mount this component again and again i can use a variable instead of this
  // This component will remount each time the value state changes.
  // let multipliedvalue = value * 5;

  // const multiplybyfive = () => {
  //   // setmultipliedvalue(value * 5)
  //   setvalue(value + 1)
  // }


    // Second Question

    console.log('App Rendered...')
    // const [value, setvalue] = useState(1)

    const [value, setvalue] = useState({
      value : 0
    })

    const clickMe = () => {
      // console.log('logged')
      // This setvalue won't remount this component because there's no change in the state because the default value of the state was already 1.
      // setvalue(1)
      // But this will re-mount the whole component every time
      // setvalue(value + 1)
      // When we pass the value using non-primitive data types like array and objects the value passed will always be the new consider it as a new box which will pass everytime even if there's no change in their values.
      setvalue({
        value: 0
      })
    }
    
  

  return (
    <>
      <h1>Main value: {value.value}</h1>
      <button onClick={clickMe}>Click to Multiply by 5</button>
      {/* <h2>Multiplied value: {multipliedvalue}</h2> */}
      
    </>
  )
}

export default App
