import React from "react";
import useTrailerVideo from "../../CustomHook/useTrailerVideo";
import { useSelector } from "react-redux";


export default function VideoBackGround({id}) {
  const trailer = useSelector((store) => store.movies?.trailerVideo); // get trailer video from store
  useTrailerVideo(id);
  
  return (
    <div >
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+ trailer?.key +"?autoplay=0&mute=1&si=I-q0rmzlfQAT3Ivc"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
}
