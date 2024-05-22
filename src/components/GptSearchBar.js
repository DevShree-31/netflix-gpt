import React, { useRef } from 'react'
import lang from '../utils/multipleLanguage'
import { useDispatch, useSelector } from 'react-redux'
import genAI from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovies } from '../utils/gptSlice';
const GptSearchBar = () => {
  const dispatch=useDispatch();
  const searchText=useRef(null);
  const langKey=useSelector((store)=>store.config.lang)
  const searchMoviesTMDB=async(movie)=>{
    const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API_OPTIONS);
    const json=await data.json()
    return json.results;
  }
  const handleGptSearchClick=async()=>{
      const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const prompt = "Act as a Movie Recommendation System for the given query"+searchText.current.value+"give 5 names of the movie in comma separated manner as given in example.Example:Gadar,Sholay,Hungama,Jannat,DDLJ"
  
    const result = await model.generateContent(prompt);
    const response =  result.response;
    const text = response.text();
    const gptMovies=text.split(",");// gives array of movies 
    // search movies using TMDB API 
    const promiseArray=gptMovies.map((movie)=>searchMoviesTMDB(movie))
    // we have to resolve the promise 
    const tmdbResult=await Promise.all(promiseArray)
    dispatch(addGptMovies({movieNames:gptMovies,movieResults:tmdbResult}));
  }
  return (
    <div className='pt-[10%] flex justify-center'>
    <form className='bg-black w-1/2 grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
    <input ref={searchText} type='text' className='p-4 m-4 col-span-9' placeholder={lang[langKey].placeholders}/>
    <button className='bg-red-500 rounded-lg  py-2 px-4 m-4 col-span-3 text-white' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
    </form>
    
    </div>
  )
}

export default GptSearchBar