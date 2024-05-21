import React from 'react'
import {signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { AVATAR, LOGO_URL } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/appconfigSlice';
const Header = () => {
    const user=useSelector((store)=>store.user)
    const navigate=useNavigate()
    const dispatch=useDispatch();
const handleSignOut=()=>{
    signOut(auth)
        .then(() => {})
        .catch((error) => {
            navigate('/error')
        });
}
useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid,email,displayName} = user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName}))
            navigate('/browse')
        } else {
            // User is signed out
            dispatch(removeUser())
            navigate('/');
        }
        return ()=>{unsubscribe()};
    });
},[]);
const handleGptSearch=()=>{
    dispatch(toggleGptSearchView())
}
const handleLanguageChange=(e)=>{
        dispatch(changeLanguage(e.target.value));
}
const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
return (
    
    <div className='absolute  px-32 bg-gradient-to-b from-black z-10 w-screen flex justify-between p-4'>
    <img className='w-44 ' src={LOGO_URL} alt='logo'/>
    {user && <div className='flex p-2'>
        {
            showGptSearch&&(
        <select className='p-2 m-2 bg-gray-900 text-white rounded-lg ' onChange={handleLanguageChange}>
            <option value='en'>English</option>
            <option value='hindi'>Hindi</option>
            <option value='spanish'>Spanish</option>
        </select>)
}
        <button className='p-2 m-2 text-white bg-purple-800 rounded-lg' onClick={handleGptSearch}>{showGptSearch?"Home Page":"GPT Search"}</button>

        <img className='w-12 h-12' src={AVATAR}/>
        <button onClick={handleSignOut} className='text-white font-bold'>Sign Out</button>
    </div>}
    </div>
    
)
}

export default Header