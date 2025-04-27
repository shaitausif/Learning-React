import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setjokes] = useState([])

  // For CORS error we've to whitelist few URL's which can get access to api's while others don't we can write that in the backend of the application

  useEffect(() => {
    // we don't need to convert the response to json using Response.json() like we used to do while using fetch
    // While creating the app using create react app we can use proxy in the package.json file and can use it instead of writing http://localhost:3000 in the request.
    // We are using Proxy here in vite.config.js so we don't need to write the port and localhost:3000
    axios.get('/api/jokes')
    .then((Response) => {
      setjokes(Response.data)
    })
    .catch((error) => {
      console.log(error.message)
    })
  })

  // We used proxy here to resolve the CORS error
  

  return (
    <>
     <h1>Chai aur FullStack</h1>
     <p>Jokes: {jokes.length}</p>

     {
      jokes && jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))
     }
    </>
  )
}

export default App
