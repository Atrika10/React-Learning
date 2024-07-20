import React from "react";
import { IMG_CDN_URL } from "../../../Utils/Constant";

export default function MovieCard({ poster_path, original_title, release_date ,original_language}) {
  if (!poster_path) return null;
  const handleImgClick = () => {
    console.log("clicked");
    window.open(`https://www.youtube.com/watch?v=gb2bkMxCTOI`, '_blank');
  }
  return (
    // w-full h-auto max-w-none object-contain
    <div  onClick={handleImgClick} className="relative w-48 mr-4 cursor-pointer ">
      <div className="opacity-0 hover:opacity-100 duration-500">
        <div className="absolute  bg-[#1a1a1a] font-bold text-xl text-red-100 h-full w-full opacity-90 p-2 flex justify-center text-center flex-col">
          {original_title}
          <div className="m-5">
          {release_date}
          </div>
          <div>Original_language : {original_language}</div>
        </div>
      </div>
      <img src={IMG_CDN_URL + poster_path} alt="movieImg"/>
    </div>
  );
}
