import { useEffect } from "react";
import { API_options } from "../Utils/constant";
import { addPopularMovies } from "../Utils/movieSlice";
import { useDispatch } from "react-redux";


const useNowPopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_options
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default useNowPopularMovies;