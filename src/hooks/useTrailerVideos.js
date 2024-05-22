import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer=(movieId)=>{
    const dispatch = useDispatch();
    const trailerVideos=useSelector((store)=>store.movies.trailerVideos)
    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTIONS)
        const json = await data.json()

        const filterData = json.results.filter(videos => videos.type === 'Trailer')
        const trailer = filterData.lengt ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer))
    }
    useEffect(() => {
        {!trailerVideos&&getMovieVideos();}
    }, [])
}
export default useMovieTrailer;