import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

  const [Products, setProducts] = useState([])
  // We usually keep the errors in the state
  const [error, seterror] = useState(false)
  // we also have to handle the loading
  const [loading, setloading] = useState(false)
  const [search, setsearch] = useState('')

  

  // useEffect expects the callback function to return either undefined or a cleanup function, but an async function always returns a Promise, which is not valid for useEffect. that's why we'll use IIFE to use async await
  useEffect(() => {
    // this controller is to avoid race condition
    const controller = new AbortController()
    ;(async() => {
      try {


        setloading(true)
        seterror(false)
        const response = await axios.get('/api/products?search=' + search,{
          // it will cancel the old request to the same url with the new one
          signal : controller.signal
        })
        console.log(response.data)
        setProducts(response.data)
        setloading(false)
      } catch (error) {
        if(axios.isCancel(error)){
          console.log("Request Cancelled",error.message)
          return;
        }
        seterror(true)
        setloading(false)
      }
    })()

    // cleanup code
    return() => {
      controller.abort()
    }

  },[search])

  // first way to handle the error
  // if(error){
  //   return <h1>Something went wrong!</h1>
  // }

  // if(loading){
  //   return <h1>Loading...</h1>
  // }

  return (
    <>
      <h1>Chai aur API in React</h1>
      <input type="text" placeholder='Search'
      value={search}
      onChange={(e) => setsearch(e.target.value)}
      />
      {/* {loading && <h2>Loading...</h2>}
      {error && <h2>Something went wrong</h2>} */}
      <h2>Number of Products are: {Products.length}</h2>
      {Products && (
        <ul>
          {Products.map((product) => (
            <li>{product.name}</li>
          ))}
        </ul>
      )}

    </>
  )
}

export default App
