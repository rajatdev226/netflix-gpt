import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);

  // if(!movies?.length){
  //   return
  // }
  return (
    <div>
      <div className="movies-lists py-10 bg-black">
        <div className="container">
          <div className="list-1 relative">
            <h1 className="pb-5 text-white">{title}</h1>
            <div className="movieCard overflow-x-scroll overflow-y-hidden flex">
              {movies?.length > 0 ? (
                movies.map((movie) => (
                  <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
                ))
              ) : (
                <p>No movies available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
