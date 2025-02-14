import React,{useState ,useContext} from 'react'
import UserContext from '../context/userContext'

const Login = () => {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const {setUser} = useContext(UserContext)


    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username,password})
    }


  return (
    <>
    <div>
        <h2>Login</h2>
        <input 
        value={username}
        placeholder='Username'
        onChange={(e)=>{setusername(e.target.value)}}
        type="text"  />
        {" "}
        <input 
        value={password}
        onChange={(e)=>{setpassword(e.target.value)}}
        placeholder='Password'
        type="password" 
         />
         <button onClick={handleSubmit}>Submit</button>
        
    </div>
    
    </>
  )
}

export default Login
