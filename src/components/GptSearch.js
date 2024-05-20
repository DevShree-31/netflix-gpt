import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BACK_IMG_URL } from '../utils/constants'
function GptSearch() {
  return (
    <div >
      <div className='absolute -z-10'>
      <img src={BACK_IMG_URL}/>
      </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch