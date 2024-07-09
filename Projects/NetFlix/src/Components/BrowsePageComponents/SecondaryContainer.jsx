import React from 'react'
import MovieList from './SecondaryContainerComponent/MovieList'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log("my movies");
  console.log(movies.nowPlayingMovies);
  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      
    </div>
  )
}

export default SecondaryContainer

