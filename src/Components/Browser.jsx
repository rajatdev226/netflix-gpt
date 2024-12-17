import React, { useEffect } from "react";
import Header from "./Header";
import { API_options } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/movieSlice";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPopularMovies from "../hooks/useNowPopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browser = () => {
  //Fetch data from TMDB API and update store
  useNowPlayingMovies();
  useNowPopularMovies();
  useTopRated();
  useUpcomingMovies();
  return (
    <>
      {/* Main Container
            - VideoBackground
            - VideoTitle
          Secondary Container
            - MoviesList * n
              - Cards * n */}
      <div>
      <Header />
      <div className="browser-page">
        <MainContainer />
        <SecondaryContainer />
      </div>
      </div>
    </>
  );
};

export default Browser;
