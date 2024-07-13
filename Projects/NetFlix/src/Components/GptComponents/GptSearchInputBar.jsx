import React, { useRef } from "react";
import lang from "../../Utils/LanguageConstant";
import { useSelector } from "react-redux";
import getResultFromGemini from "../../Utils/GeminiApi";

export default function GptSearchInputBar() {
  const searchText = useRef(null);   // to get the value of the input field
  const languagePreference = useSelector((state) => state.config.language);

  const handleGPTSearchClick = async () =>{
    console.log(searchText.current.value);
    // make an api call to get the search result from the GPT-3

    const gptQuery = `Act as a movie recommendation system & suggest some movies for the query : ${searchText.current.value}. only give me 5 movies, comma seperated like the example result given ahead. Example resul : koi mil gaya, kabhi khusi kabhi gaam, projapoti, titanic, avatar`;

    getResultFromGemini(gptQuery);  // calling the function to get the result from the gemini api
    
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
