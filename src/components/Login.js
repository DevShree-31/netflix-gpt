import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate'
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
const Login = () => {
    const [isSignInForm,setIsSignInForm]=useState(true)
    const [errorMessage,setErrorMessage]=useState(null)
    const toggleSignIn=()=>{
        setIsSignInForm(!isSignInForm);
    }
    const email=useRef(null);
    const password=useRef(null);
    const handleClickEvent=()=>{
        const message=checkValidateData(email.current.value,password.current.value);
        setErrorMessage(message);
        if(message) return;
        //Signup SignIn Logic
        if(!isSignInForm){
            //Sign Up logic
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    console.log(user);// login user object on successfull signup
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+'-'+errorMessage);
                });
        }
        else{
            signInWithEmailAndPassword(auth, email.current.value,password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+'-'+errorMessage);
                });
        }
    }
return (
    <div>
    <Header/>
    <div className='absolute'>
    <img src='https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg' alt='bgImage'/>
    </div>
    <form onSubmit={(e)=>e.preventDefault()} className='absolute bg-black w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white opacity-80 '>
        <h1 className='font-bold text-3xl py-4 '>{isSignInForm?"Sign In":"Sign Up"}</h1>
    {!isSignInForm && 
        <input type='text' placeholder='Full Name' className='p-2 my-2 w-full bg-gray-700'/>
    }
    <input ref={email} type="text" placeholder='Email Address' className='p-2 my-2 w-full bg-gray-700'/> 
    <input ref={password} type="password" placeholder='Password' className='p-2 my-2 w-full bg-gray-700'/>
    <p className='font-bold text-red-500 text-lg py-2'>{errorMessage}</p>
    <button className='p-4 my-4 bg-red-700 w-full' onClick={handleClickEvent}>{isSignInForm?"Sign In":"Sign Up"}</button>
    <p onClick={toggleSignIn} className='cursor-pointer'>{isSignInForm?"New to Netflix? Sign Up Now":"Already registered? Sign In Now"}</p>
    </form>
    </div>
)
}

export default Login