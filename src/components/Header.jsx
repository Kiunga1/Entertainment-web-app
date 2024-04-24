//import React from 'react'
import  Logo from '../../public/assets/logo.svg'
import Avatar from '../../public/assets/image-avatar.png'
import { Link, NavLink } from 'react-router-dom'
import { FaBookmark } from "react-icons/fa6";
import { MdLocalMovies } from 'react-icons/md';
import {PiTelevisionLight } from 'react-icons/pi';
import { TbCategory } from 'react-icons/tb';

const Header = () => {
  return (
    <>
        <aside className="hidden lg:block w-20 h-screen bg-primaryDark  ">
            <div className="p-6 bg-secondaryDark flex flex-col items-center gap-28 rounded-xl ">
                <Link to='/' className="flex items-center mb-8">
                    <img className="h-10" src={Logo} alt="Logo" />
                </Link>
                <nav className="flex flex-col space-y-4">
                    <NavLink to="#" className="text-gray-400 text-xl hover:text-white active:text-white">
                        <TbCategory />
                    </NavLink>
                    <NavLink to="/movies" className="text-gray-400 text-xl hover:text-white active:text-white">
                        <MdLocalMovies />
                    </NavLink>
                    <NavLink to="/tvseries" className="text-gray-400 text-xl hover:text-white active:text-white">
                        <PiTelevisionLight />
                    </NavLink>
                    <NavLink to="/bookmarkmovies" className="text-gray-400 text-xl hover:text-white active:text-white">
                        <FaBookmark />
                    </NavLink>
                </nav>
                <div className="flex-1">
                    <img className="h-10 rounded-full" src={Avatar} alt="User Avatar" />
                </div>
            </div>
            
        </aside>
        <header className='lg:hidden flex justify-between items-center h-16 bg-secondaryDark px-6'>
            <Link to='/' className='flex items-center'>
                <img className='h-10' src={Logo} alt="Logo" />
            </Link>
            <nav className='flex items-center space-x-4'>
                <NavLink to="/" className='text-gray-400 text-2xl hover:text-white active:text-white'> 
                    <TbCategory />
                </NavLink>
                <NavLink to="/movies" className='text-gray-400 text-2xl hover:text-white active:text-white'>
                    <MdLocalMovies />
                </NavLink>
                <NavLink to="/tvseries" className='text-gray-400 text-2xl hover:text-white active:text-white'> 
                    <PiTelevisionLight />
                </NavLink>
                <NavLink to="/bookmarkmovies" className='text-gray-400 text-2xl hover:text-white active:text-white'>
                    <FaBookmark />
                </NavLink>
            </nav>
            <div className=''>
                <img  className='h-10 rounded-full' src={Avatar} alt="user-avatar" />

            </div>
        </header>
    </>
  )
}

export default Header
