import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/Constant";
import {addPopularMovies} from '../slices/moviesSlice'
import { useEffect } from "react";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector((store) => store.movies.popularMovies);
    const getPopularMovies = async() =>{
        const data =  await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)

        const jsonData = await data.json();
        dispatch(addPopularMovies(jsonData.results));
    }

    useEffect(()=>{
        // memoization to prevent multiple API calls
       { !popularMovies && getPopularMovies()};
    },[]);
}
export default usePopularMovies;