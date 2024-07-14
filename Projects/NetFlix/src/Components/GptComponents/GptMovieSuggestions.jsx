import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../BrowsePageComponents/SecondaryContainerComponent/MovieList';

export default function GptMovieSuggestions() {
  const {gptMovies, tmdbMovies} = useSelector((store) => store.gpt);  // getting the gptMovies and tmdbMovies from the store
  if(!gptMovies.length) return null;  // if gptMovies is empty, return null
  console.log(gptMovies);
  //  console.log(tmdbMovies[0].results[0]);

  return (
    <div>
      <div className='bg-[#1a1a1a] text-white mt-14 p-5'>
        {gptMovies.map((movie, idx) =>(
          <MovieList title={movie} movies={tmdbMovies[idx].results}/>
        ))}
        {/* <h1>{gptMovies[0]}</h1>
        <MovieList title={gptMovies[0]} movies={tmdbMovies[0].results}/> */}
        
      </div>
    </div>
  )
}
