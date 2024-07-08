import React from 'react'

export default function VideoTitle({title, overview}) {
  return (
    <div className='p-28'>
      <h1 className='font-bold text-4xl'>{title}</h1>
      <p className='w-1/3 pt-5 pb-8'>{overview}</p>

      <div >
        <button className='bg-slate-200 py-4 px-7 mr-5'> ▶ Play</button>
        <button className='bg-slate-200 py-4 px-7'>ⓘ More Info</button>
      </div>
    </div>
  )
}
