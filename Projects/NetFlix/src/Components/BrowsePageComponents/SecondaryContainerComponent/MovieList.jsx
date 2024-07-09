import React from 'react'
import MovieCard from './MovieCard'

export default function MovieList({title, movies}) {
  return (
    <div className='bg-black text-white pl-14'>
        <h1 className='text-3xl py-5'>{title}</h1>
        <div className='flex overflow-x-scroll '>
            <div className='flex'>
                {/*if movies exist then map all the movies */}
                {movies && movies.map((movie)=>(
                    <MovieCard key={movie.id} poster_path={movie.poster_path}/>
                ))} 
                
                
                {/* <MovieCard poster_path={movies[0].poster_path}/> */}
            </div>
        </div>
    </div>
  )
}
