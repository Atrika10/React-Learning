import React, { useEffect } from "react";
import { API_OPTIONS } from "../../Utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../../slices/moviesSlice";

export default function VideoBackGround() {
  const dispatch = useDispatch();
  // step -4 get trailer from store
  const trailer = useSelector((store) => store.movies?.trailerVideo); // get trailer video from store

  // Step-1 fetch trailer of the movie
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/1022789/videos?language=en-US",
      API_OPTIONS
    );
    const jsonData = await data.json();
    console.log(jsonData);

    // Step -2 we need to filter out the trailer from the videos
    const filteredVideos = jsonData.results.filter(
      (video) => video.type === "Trailer"
    );
    console.log(filteredVideos);
    // need only 1 video
    const trailer = filteredVideos.length
      ? filteredVideos[0]
      : jsonData.results[0]; // if no trailer then select the first video
    console.log(trailer);

    // step -3 add trailer to store
    dispatch(addTrailerVideo(trailer))  
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
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
