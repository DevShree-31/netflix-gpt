import React from 'react'


const GptSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center'>
    <form className='bg-black w-1/2 grid grid-cols-12'>
    <input type='text' className='p-4 m-4 col-span-9' placeholder='What would you like to watch'/>
    <button className='bg-red-500 rounded-lg  py-2 px-4 m-4 col-span-3 text-white'>Search</button>
    </form>
    
    </div>
  )
}

export default GptSearchBar