import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
//Fetch data from TMDB API and update store
const useTrendingMovies = () => {
    const dispatch = useDispatch();
    const getTrendingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/trending/movie/day?page=1', API_OPTIONS);
        const json = await data.json();
        console.log(json.results);
        dispatch(addTrendingMovies(json.results));
    }
    useEffect(() => {
        getTrendingMovies();
    });
};
export default useTrendingMovies;