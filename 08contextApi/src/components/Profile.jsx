import React, { useContext } from 'react'
import UserContext from '../context/userContext'

const Profile = () => {
  const { User } = useContext(UserContext)

  if(!User) return <h1>Not Logged in!</h1>
  return (
    <h2>
      Profile: {User.username}
      <br />
      The Password is: {User.password}
    </h2>
  )
}

export default Profile
