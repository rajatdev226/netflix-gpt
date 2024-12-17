import { useEffect } from "react";
import { API_options } from "../Utils/constant";
import { addTopRated } from "../Utils/movieSlice";
import { useDispatch } from "react-redux";


const useTopRated = () => {
  const dispatch = useDispatch();

  const getTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_options
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTopRated(json.results));
  };
  useEffect(() => {
    getTopRated();
  }, []);
};

export default useTopRated;