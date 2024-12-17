import React, { useEffect, useState } from "react";
import { API_options } from "../Utils/constant";

const VideoBackground = ({ movieId }) => {
  const [trailerId, setTrailerId] = useState("null");
  //Fetch movie Trailor
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/1241982/videos?language=en-US",
      API_options
    );
    const json = await data.json();
    // console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log(trailer);
    setTrailerId(trailer.key);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

  return (
    <div className="w-screen video-backr">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerId +
          "?autoplay=1&mute=1&controls=0&loop=1&playlist=" +
          trailerId
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
