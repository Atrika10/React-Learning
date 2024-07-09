import React from "react";

export default function VideoTitle({ title, overview }) {
  return (
    <div className="p-28 absolute bg-gradient-to-r from-black text-white w-screen aspect-video">
      <h1 className="mt-14 font-bold text-4xl">{title}</h1>
      <p className="w-1/3 pt-5 pb-8">{overview}</p>

      <div>
        <button className="bg-slate-200 rounded-md py-4 px-7 mr-5 text-black font-bold hover:bg-opacity-75">
          {" "}
          ▶ Play
        </button>
        <button className="bg-gray-600 rounded-md py-4 px-7 hover:bg-opacity-75">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
}
