import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <Header/> {/* contains logo */}
      <div className='relative w-full h-full'>
      <img src="https://techovedas.com/wp-content/uploads/2024/04/netflix-octobre-contenus-2022.jpg" alt="backgroundImg"/>
      <div className=' absolute inset-0 bg-black opacity-50'></div>
      </div>
    </div>
  )
}

export default Login
