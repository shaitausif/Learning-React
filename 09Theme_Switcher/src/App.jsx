import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import { ThemeProvider } from './contexts/Theme'

function App() {
  const [themeMode, setthemeMode] = useState('light')

  const lightTheme = () => {
    setthemeMode('light')
  }

  const darkTheme = () => {
    setthemeMode('dark')
  }
  
  useEffect(() => {
    document.querySelector('html').classList.remove('dark','light')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  
  

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
   
      <div className='flex flex-wrap min-h-screen justify-center items-center'>
        <div className="w-full">
          <div className='w-full max-w-sm mx-auto flex justify-end '>
            <ThemeBtn/>
          </div>
        </div>
          <div className='w-full mx-auto max-w-sm'>
            <Card/>
          </div>
      </div>
      
    </ThemeProvider>
  )
}

export default App
