import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter , createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx'
import ContactForm from './components/Contact/Contact.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    // Use self closing Router component if you don't want to have further routes after a particular route
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/> } />
      <Route path='about' element={<About/>} />
      <Route path='user/' element={<User/>} >
        <Route path=':userid' element={<User />} />
      </Route>  {/* here we're using a parameter userid for dynamic routing */}
      <Route
       loader={githubInfoLoader} // it will do some preprocessing and it will optimize the fetching of data
       path='github'
        element={<Github />} />
        <Route path='contact' element={<ContactForm/>} />

      <Route path='*' element={<div>Not found</div>} /> {/* if no case matches with the url then this component will be shown to the User. */}
    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
