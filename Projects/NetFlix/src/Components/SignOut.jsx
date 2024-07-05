import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../Utils/Firebase';
import { useNavigate } from 'react-router-dom';

export default function SignOut() {
    const navigate = useNavigate();

    const handleSignOut = () =>{
        signOut(auth).then(() => {
            navigate('/');
          }).catch((error) => {
            navigate('/error')
          });
    }
  return (
    <div>
      <button 
      onClick={handleSignOut}
      className='bg-red-500 p-3 rounded-lg text-white'>Sign Out</button>
    </div>
  )
}
