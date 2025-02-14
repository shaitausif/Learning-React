import { useCallback, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numbersAllowed, setnumbersAllowed] = useState(false)
  const [charactersAllowed, setcharactersAllowed] = useState(false)
  const [password, setpassword] = useState('')
  const passwordRef = useRef(null)

  const generatePassword = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numbersAllowed){
      str += "0123456789"
    }
    if(charactersAllowed){
      str += "!@#$%^&*()_+"
    }

    for(let i = 0; i < length ; i++){
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setpassword(pass)

  },[length, numbersAllowed, charactersAllowed])
  
  useEffect(()=>{
      generatePassword();
  },[length, numbersAllowed, charactersAllowed])

  const copyPassworToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()  // we uses ? this in the case we didn't got the reference of the input so to 
  }
  

  return (
    <>
      <div className='w-full mx-auto max-w-md shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-center text-xl my-3 text-white'>Password Generator</h1>
        <div className='flex justify-center shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          className='outline-none w-full px-3 py-1'
          placeholder='Password'
          value={password}
          readOnly
          ref={passwordRef}
          />
          <button onClick={copyPassworToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-800 duration-200'>
            Copy
          </button>
        </div>
        <div className='flex gap-x-2 text-sm'>
          <div className='flex gap-x-1 items-center'>
            <input 
            type="range"
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>setlength(e.target.value)}
            name=''
            id=''


             />
             <label className='w-[75px] text-center' htmlFor="length">Length: {length}</label>
             <div className='flex gap-x-1 items-center justify-center w-[7vw]'>
              <input
               type="checkbox"
               defaultChecked={numbersAllowed}
               onChange={()=>{
                setnumbersAllowed((prev)=>!prev)
               }}
               name="numbers"
               id="numbers" />
               <label htmlFor="numbers">Numbers</label>
             </div>
             <div className='flex gap-x-1 items-center'>
              <input
               type="checkbox"
               defaultChecked={charactersAllowed}
               onChange={()=>{
                setcharactersAllowed((prev)=>!prev)
               }}
               name="Characters"
               id="Characters" />
               <label htmlFor="Characters">Characters</label>
             </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
