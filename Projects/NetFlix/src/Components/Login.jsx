import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <Header/> {/* contains logo */}

      <div className='relative w-full h-full'>
      <img src="https://techovedas.com/wp-content/uploads/2024/04/netflix-octobre-contenus-2022.jpg" alt="backgroundImg"/>
      <div className=' absolute inset-0 bg-black opacity-50'></div>


      <div className='w-1/3 bg-black opacity-80 flex justify-center items-center absolute top-32 left-1/3'>

        <form className='w-2/3 flex flex-col gap-5 pt-14 pb-14 '>

          <div className='text-white font-bold text-3xl mb-4'>Sign In</div>
          <input type="email" name="email" placeholder='Enter your Email' className='p-4 w-full  border text-lg bg-transparent rounded-lg text-white'/>
          <input type="password" name="password" placeholder='Enter your Password' className='p-4 w-full bg-transparent border text-lg rounded-lg text-white' />
          <button className='text-white bg-[#FF0000] font-bold text-xl p-2 rounded-lg'>Sign In</button>

          <div className='text-white mt-4 cursor-pointer'>New to Netflix ? Sign Up</div>

        </form>
      </div>
      </div>
    </div>
  )
}

export default Login
