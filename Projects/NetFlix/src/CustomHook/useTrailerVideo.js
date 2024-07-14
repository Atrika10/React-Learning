import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/Constant";
import { addTrailerVideo } from "../slices/moviesSlice";
import { useEffect } from "react";

const useTrailerVideo = (id) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector((store) => store.movies.trailerVideo);
    
    // Step-1 fetch trailer of the movie
    const getMovieVideos = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US",
        API_OPTIONS
      );
      const jsonData = await data.json();
  
      // Step -2 we need to filter out the trailer from the videos
      const filteredVideos = jsonData.results.filter(
        (video) => video.type === "Trailer"
      );
      // need only 1 video
      const trailer = filteredVideos.length
        ? filteredVideos[0]
        : jsonData.results[0]; // if no trailer then select the first video
  
      // step -3 add trailer to store
      dispatch(addTrailerVideo(trailer))  
    };
  
    useEffect(() => {
      // memoization to prevent multiple API calls
      {!trailerVideo && getMovieVideos()}
      
    }, []);
}

export default useTrailerVideo;

