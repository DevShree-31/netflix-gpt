import React from 'react'
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const user=useSelector((store)=>store.user)
    const navigate=useNavigate()
const handleSignOut=()=>{
    signOut(auth)
        .then(() => {
            // Sign-out successful.
            navigate("/")
        })
        .catch((error) => {
            navigate('/error')
        });
}
return (
    <div className='absolute  px-32 bg-gradient-to-b from-black z-10 w-screen flex justify-between p-4'>
    <img className='w-44 ' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo'/>
    {user && <div className='flex p-2'>
        <img className='w-12 h-12' src='https://imgs.search.brave.com/PHcph0b2jOqzsWG9vo7SXGyDlFx-SuzHqn6U-ALMwII/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb29k/aWJlZS5jb20vd3At/Y29udGVudC91cGxv/YWRzL05ldGZsaXgt/YXZhdGFyLTEyLnBu/Zw'/>
        <button onClick={handleSignOut} className='text-white font-bold'>Sign Out</button>
    </div>}
    </div>
    
)
}

export default Header