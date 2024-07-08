import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackGround from './VideoBackGround'

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies)    // get all movies from store

  if(!movies) return ;         // if no movie return null (no need to render anything, this is known as early return)

  // we need 1 movie to display in main container as background video
  const mainMovie = movies[0];
  console.log( mainMovie);

  const { original_title, overview } = mainMovie;    // extract original_title and overview from mainMovie
  console.log(original_title, overview);


  return (
    <div>
      <VideoTitle title = {original_title} overview = {overview}/>
      <VideoBackGround/>
    </div>
  )
}

export default MainContainer
