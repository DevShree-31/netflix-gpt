import React, { useState } from 'react'
import Header from './Header'
const Login = () => {
    const [isSignInForm,setIsSignInForm]=useState(true)
    const toggleSignIn=()=>{
        setIsSignInForm(!isSignInForm);
    }
return (
    <div>
    <Header/>
    <div className='absolute'>
    <img src='https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg' alt='bgImage'/>
    </div>
    <form className='absolute bg-black w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white opacity-80 '>
        <h1 className='font-bold text-3xl py-4 '>{isSignInForm?"Sign In":"Sign Up"}</h1>
    {!isSignInForm && 
        <input type='text' placeholder='Full Name' className='p-2 my-2 w-full bg-gray-700'/>
    }
    <input  type="text" placeholder='Email Address' className='p-2 my-2 w-full bg-gray-700'/> 
    <input  type="password" placeholder='Password' className='p-2 my-2 w-full bg-gray-700'/>
    <button className='p-4 my-4 bg-red-700 w-full'>{isSignInForm?"Sign In":"Sign Up"}</button>
    <p onClick={toggleSignIn} className='cursor-pointer'>{isSignInForm?"New to Netflix? Sign Up Now":"Already registered? Sign In Now"}</p>
    </form>
    </div>
)
}

export default Login