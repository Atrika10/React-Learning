import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/Constant";
import { useEffect } from "react";
import { addUpComingMovies } from "../slices/moviesSlice";

const useUpComingMovies = () => {
    const dispatch = useDispatch();
    const upComingMovies = useSelector((store) => store.movies.upComingMovies);

    const getUpComingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
        const jsonData = await data.json();
        dispatch(addUpComingMovies(jsonData.results));
    }

    useEffect(()=>{
        // memoization to prevent multiple API calls
        if(upComingMovies === null){
            getUpComingMovies();
        }
    })

}
export default useUpComingMovies;