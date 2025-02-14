import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const { userid } = useParams()
  return (
    <>
        <div>
            Hey {userid}, How are you doing?
        </div>
    
    </>
  )
}

export default User
