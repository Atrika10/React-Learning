import useNowPlayingMovies from '../CustomHook/useNowPlayingMovies'
import usePopularMovies from '../CustomHook/usePopularMovies';
import useTopRatedMovies from '../CustomHook/useTopRatedMovies';
import useUpComingMovies from '../CustomHook/useUpComingMovies';
import MainContainer from './BrowsePageComponents/MainContainer';
import SecondaryContainer from './BrowsePageComponents/SecondaryContainer';
import Header from './Header'


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
