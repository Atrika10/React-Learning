import React from 'react'
import MovieCard from './MovieCard'

export default function MovieList({title, movies}) {
  return (
    <div className=' text-white pl-14 pb-12'>
        <h1 className='text-3xl py-5'>{title}</h1>
        <div className='flex overflow-x-scroll'>
            <div className='flex pb-2'>
                {/*if movies exist then map all the movies */}
                {movies && movies.map((movie)=>(
                    <MovieCard key={movie.id} original_title = {movie.original_title} release_date={movie.release_date } original_language = {movie.original_language}  poster_path={movie.poster_path}/>
                ))} 
                {/* <MovieCard poster_path={movies[0].poster_path}/> */}
            </div>
        </div>
    </div>
  )
}
