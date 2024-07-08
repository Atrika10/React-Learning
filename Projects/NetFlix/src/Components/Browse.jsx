import useNowPlayingMovies from '../CustomHook/useNowPlayingMovies'
import MainContainer from './BrowsePageComponents/MainContainer';
import SecondaryContainer from './BrowsePageComponents/SecondaryContainer';
import Header from './Header'


const Browse = () => {
  useNowPlayingMovies();
  
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
