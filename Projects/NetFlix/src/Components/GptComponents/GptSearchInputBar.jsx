import React, { useRef } from "react";
import lang from "../../Utils/LanguageConstant";
import { useDispatch, useSelector } from "react-redux";
import getResultFromGemini from "../../Utils/GeminiApi";
import { setGptMovies, setTmdbMovies } from "../../slices/gptSlice";
import { API_OPTIONS } from "../../Utils/Constant";

export default function GptSearchInputBar() {
  const dispatch = useDispatch();

  const searchText = useRef(null);   // to get the value of the input field
  const languagePreference = useSelector((state) => state.config.language);

  const getSearchMoviesFromTMDB = async (movie) => {
    const movieData = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
    const movieJson = await movieData.json();
    //console.log(movieJson);
    return movieJson;
  };
    

  const handleGPTSearchClick = async () =>{
    // console.log(searchText.current.value);
    // make an api call to get the search result from the GPT-3

    const gptQuery = `Act as a movie recommendation system & suggest some movies for the query : ${searchText.current.value}. only give me 5 movies, comma seperated like the example result given ahead. Example resul : koi mil gaya, kabhi khusi kabhi gaam, projapoti, titanic, avatar`;

    const gptMovies = await getResultFromGemini(gptQuery);  // calling the function to get the result from the gemini api
    
    // convert gptMovies to array & store it in the redux store
    const gptMoviesArray = gptMovies.split(',');
    dispatch(setGptMovies(gptMoviesArray));
    
    // call the tmdb api to get the movie details for each of the movie in the gptMoviesArray
    const tmdbMoviesPromises = gptMoviesArray.map((movie) => getSearchMoviesFromTMDB(movie)); // this will return an array of promises because map function will not wait for the promises to resolve

    // so we need to wait for all the promises to resolve
    const tmdSearchedMovies = await Promise.all(tmdbMoviesPromises);
   // console.log(tmdSearchedMovies);
   dispatch(setTmdbMovies(tmdSearchedMovies));
    
  }

  return (
    <div className="z-30 ">
      <form
        className="flex justify-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
        ref = {searchText}
          className="w-6/12 border-b-[1px] border-rose-400 p-2 text-white bg-[#1a1a1a] rounded-lg mr-5 px-4 py-4 shadow-lg shadow-rose-400/30"
          type="text"
          placeholder={lang[languagePreference].inputPlaceholder}
        />

        <button 
        onClick={handleGPTSearchClick}
        className="bg-rose-600 text-white font-bold rounded-lg px-5 tracking-wide cursor-pointer">
          {lang[languagePreference].Search}
        </button>
      </form>
    </div>
  );
}
