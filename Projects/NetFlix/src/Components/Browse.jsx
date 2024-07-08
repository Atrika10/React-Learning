import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../Utils/Constant'

const Browse = () => {
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS
    )
    const jsonData = await data.json();
    console.log(jsonData);
  }

  useEffect(() =>{
    getNowPlayingMovies();
  }, []);
  
  return (
    <div>
      <Header/>
      
    </div>
  )
}

export default Browse
