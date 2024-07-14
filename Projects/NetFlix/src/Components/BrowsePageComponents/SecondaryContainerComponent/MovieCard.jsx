import React from 'react'
import { IMG_CDN_URL } from '../../../Utils/Constant'

export default function MovieCard({poster_path}) {
  if(!poster_path) return null;
  return (
    // w-full h-auto max-w-none object-contain
    <div className='w-48 mr-4'>
      <img  src={IMG_CDN_URL+ poster_path} alt="movieImg" />
    </div>
  )
}
