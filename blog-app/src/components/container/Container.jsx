import React from 'react'

const Container = ({children}) => {
  return (
    <div className='w-full max-w-8xl mx-auto px-5 md:px-14'>
      {children}
    </div>
  )
}

export default Container
