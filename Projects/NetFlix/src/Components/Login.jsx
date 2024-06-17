import React, { useRef, useState } from 'react'
import Header from './Header'
import { validateData } from '../Utils/Validate';


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);     // opposite value will be set 
  }

  //references of those input boxes
  const email = useRef(null);
  const password = useRef(null);

  const handleBtnClick = (e) =>{
    
    // validateData(email, password);
    console.log(email.current.value);
    console.log(password.current.value);

  }

  return (
    <div>
      <Header /> {/* contains logo */}

      <div className='relative w-full h-full'>
        <img src="https://techovedas.com/wp-content/uploads/2024/04/netflix-octobre-contenus-2022.jpg" alt="backgroundImg" />
        <div className=' absolute inset-0 bg-black opacity-50'></div>


        <div className='w-1/3 bg-black opacity-80 flex justify-center items-center absolute top-32 left-1/3'>

          <form onSubmit={(e) =>{e.preventDefault()}} className='w-2/3 flex flex-col gap-5 pt-14 pb-14 '>

            <div className='text-white font-bold text-3xl mb-4'>

              {isSignInForm ? "Sign In" : "Sign Up"}   { /*if isSignInForm true then sign in text will be shown else signup */}

            </div>

            {!isSignInForm &&
              <input type="text" name="name" placeholder='Enter your Full name' className='p-4 w-full  border text-lg bg-transparent rounded-lg text-white' />}

            <input ref={email} type="email" name="email" placeholder='Enter your Email' className='p-4 w-full  border text-lg bg-transparent rounded-lg text-white' />

            <input ref={password} type="password" name="password" placeholder='Enter your Password' className='p-4 w-full bg-transparent border text-lg rounded-lg text-white' />
            
            <button onClick={handleBtnClick} className='text-white bg-[#FF0000] font-bold text-xl p-2 rounded-lg'>
               {isSignInForm ? "Sign In" : "Sign Up"} </button>

            <div
              className='text-white mt-4 cursor-pointer'
              onClick={toggleSignInForm}>
                {isSignInForm ? "New to Netflix ? Sign Up" : "Already a member ? Sign In"}
              
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
