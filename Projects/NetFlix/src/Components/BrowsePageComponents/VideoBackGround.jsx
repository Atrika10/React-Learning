import React from "react";
import useTrailerVideo from "../../CustomHook/useTrailerVideo";
import { useSelector } from "react-redux";


export default function VideoBackGround({id}) {
  const trailer = useSelector((store) => store.movies?.trailerVideo); // get trailer video from store
  useTrailerVideo(id);
  
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/"+ trailer?.key +"?si=I-q0rmzlfQAT3Ivc"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
}
