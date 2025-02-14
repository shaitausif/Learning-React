import React from 'react'

const Logo = ({width = "100%"}) => {
  return (
    <>
    <img className='md:block hidden' src="/Logo.png" alt="Logo placeholder" width={width}/>
    <img className='md:hidden block w-[50px]'  src="/Logo.png" alt="Logo placeholder"/>
    </>
  )
}

export default Logo
