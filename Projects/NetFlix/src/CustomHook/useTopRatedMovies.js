import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/Constant";
import { useEffect } from "react";
import { addTopRatedMovies } from "../slices/moviesSlice";

const useTopRatedMovies = ()=>{
    const dispatch = useDispatch();
    
    const getTopRatedMovies = async ()=>{
        const data =  await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
        const jsonData = await data.json();
        dispatch(addTopRatedMovies(jsonData.results));
    }
    useEffect(() =>{
        getTopRatedMovies();
    })
}
export default useTopRatedMovies;