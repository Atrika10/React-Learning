import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../CustomHook/useNowPlayingMovies'
import usePopularMovies from '../CustomHook/usePopularMovies';
import useTopRatedMovies from '../CustomHook/useTopRatedMovies';
import useUpComingMovies from '../CustomHook/useUpComingMovies';
import MainContainer from './BrowsePageComponents/MainContainer';
import SecondaryContainer from './BrowsePageComponents/SecondaryContainer';
import GptSearch from './GptComponents/GptSearch';
import Header from './Header'
import Footer from './Footer';


const Browse = () => {
  const isGptSearchOpen = useSelector((store) => store.gpt.isGptSearchOpen);
  
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  
  return (
    <div>
      <Header/>
      {/* if search with gpt btn clicked then only GptSearch page will be shown */}
      {
        isGptSearchOpen ? <GptSearch/> : 
        <>
           <MainContainer/>
           <SecondaryContainer/>
           <Footer/>
        </>
      }
     
    </div>
  )
}

export default Browse
