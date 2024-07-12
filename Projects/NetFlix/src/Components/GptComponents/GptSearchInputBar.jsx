import React from 'react'

export default function GptSearchInputBar() {
  return (
    <div className='z-30 '>
      <form className='flex justify-center'>
          <input 
          className='w-6/12 border-b-[1px] border-rose-400 p-2 text-white bg-[#1a1a1a] rounded-lg mr-5 px-4 py-4 shadow-lg shadow-rose-400/30'
          type="text" placeholder='what do you want to search today'/>

          <button className='bg-rose-600 text-white font-bold rounded-lg px-5 tracking-wide cursor-pointer'>Search</button>
        </form>
    </div>
  )
}
