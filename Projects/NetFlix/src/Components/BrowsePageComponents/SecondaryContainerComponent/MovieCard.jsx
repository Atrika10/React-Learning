import React from 'react'
import { IMG_CDN_URL } from '../../../Utils/Constant'

export default function MovieCard({poster_path,original_title}) {
  if(!poster_path) return null;
  return (
    // w-full h-auto max-w-none object-contain
    <div className='relative w-48 mr-4 cursor-pointer '>
      <div className='absolute bottom-0 bg-gray-600 w-full opacity-80 p-2 flex '>
        {original_title}</div>
      <img  src={IMG_CDN_URL+ poster_path} alt="movieImg" />
    </div>
  )
}
