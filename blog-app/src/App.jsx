import { useEffect, useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import { useDispatch , useSelector } from 'react-redux'
import authService from './appwrite/auth'
import { logout, login , Loading as LoadingState } from './store/authSlice.js'
import Loader from './pages/Loader.jsx'
import useLenis from './hooks/useLenis.js'
import Cursor from './components/Cursor.jsx'




function App() {
  useLenis(); // Enables smooth scrolling
  const [loading, setloading] = useState(true)
  const dispatch = useDispatch()
  const Loading = useSelector((state) => state.auth.loading)


  
  useEffect(() => {
    dispatch(LoadingState(false))
  }, [])
  

  useEffect(() => {
    
    authService.getCurrentUser()
    .then((userData) => {
   
      if(userData) dispatch(login({userData}))
      else dispatch(logout())
    })
    .finally(() => setloading(false ))
  },[dispatch])
  

  return !loading ? (
    <>
  
      <div className={`min-h-screen flex flex-wrap content-between bg-gray-200 ${Loading ? 'pointer-events-none' : ''}`}>
        <Cursor/>
        <div className="w-full block">
          <Header />
          <main>
            <Outlet/>
           
          </main>
        </div>
        <div className="w-full block">
          <Footer/>
        </div>
      </div>
   
      </>
    
  ) : <Loader/>
}

export default App
