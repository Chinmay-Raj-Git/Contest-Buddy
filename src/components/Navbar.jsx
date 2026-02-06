import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
    function toggleTheme(){

    }
    
    return (
        <nav className="w-full h-fit py-4 px-8 bg-linear-to-r from-emerald-700 to-green-600 dark:from-emerald-950 dark:to-green-900 border-b-emerald-500 text-white flex justify-between">
            <h1 className="text-3xl font-semibold">Contest Buddy <i className="fa-solid fa-robot px-2"></i></h1>
            <button onClick={toggleTheme()} className='cursor-pointer'>
                {/* <i id="theme-icon" className="fa-solid fa-moon text-2xl hover:text-emerald-300"></i> */}
                <FaSun className='text-2xl hover:text-emerald-400 active:text-emerald-600'/>
                {/* <FaMoon className='text-2xl hover:text-emerald-400 active:text-emerald-600'/> */}
            </button>
        </nav>
    )
}

export default Navbar
