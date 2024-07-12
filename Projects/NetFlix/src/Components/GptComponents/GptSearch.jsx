import React from "react";
import { MAIN_BACKGROUND } from "../../Utils/Constant";
import GptSearchInputBar from "./GptSearchInputBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

export default function GptSearch() {
  return (
    <div>
      <div className="-z-10 relative w-full h-full">
        <img src={MAIN_BACKGROUND} alt="backgroundImg" />
        <div className=" absolute inset-0 bg-black opacity-50"></div>    
      </div>
      <div className="absolute top-[30%] w-[100%]">

          <GptSearchInputBar/>
          <GptMovieSuggestions/>
          </div>
    </div>
  );
}
