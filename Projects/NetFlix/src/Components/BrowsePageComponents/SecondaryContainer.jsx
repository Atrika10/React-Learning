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
      <MovieList title={"Top Rated "} movies={movies.topRatedMovies}/>
      <MovieList title={"Popular "} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming "} movies={movies.upComingMovies}/>
      
    </div>
  )
}

export default SecondaryContainer

