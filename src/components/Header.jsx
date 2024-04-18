import React from 'react'
import  Logo from '../assets/logo.svg'
import Avatar from '../assets/image-avatar.png'
import { Link } from 'react-router-dom'
import { FaBookmark } from "react-icons/fa6";
import { MdLocalMovies } from 'react-icons/md';
import {PiTelevisionLight } from 'react-icons/pi';
import { TbCategory } from 'react-icons/tb';

const Header = () => {
  return (
    <>
        <aside className="hidden lg:block w-20 h-screen bg-primaryDark  ">
            <div className="p-6 bg-secondaryDark h-screen flex flex-col items-center gap-28 ">
                <div className="flex items-center mb-8">
                    <img className="h-10" src={Logo} alt="Logo" />
                </div>
                <nav className="flex flex-col space-y-4">
                    <Link to="#" className="text-gray-400 text-xl hover:text-white active:text-white">
                        <TbCategory />
                    </Link>
                    <Link to="#" className="text-gray-400 text-xl hover:text-white active:text-white">
                        <MdLocalMovies />
                    </Link>
                    <Link to="#" className="text-gray-400 text-xl hover:text-white active:text-white">
                        <PiTelevisionLight />
                    </Link>
                    <Link to="#" className="text-gray-400 text-xl hover:text-white active:text-white">
                        <FaBookmark />
                    </Link>
                </nav>
                <div className="flex-1">
                    <img className="h-10 rounded-full" src={Avatar} alt="User Avatar" />
                </div>
            </div>
            
        </aside>
        <header className='lg:hidden flex justify-between items-center h-16 bg-secondaryDark px-6'>
            <div className='flex items-center'>
                <img className='h-10' src={Logo} alt="Logo" />
            </div>
            <nav className='flex items-center space-x-4'>
                <Link to="#" className='text-gray-400 text-2xl hover:text-white active:text-white'> 
                    <TbCategory  fill='white '/>
                </Link>
                <Link to="#" className='text-gray-400 text-2xl hover:text-white active:text-white'>
                    <MdLocalMovies fill='white '/>
                </Link>
                <Link to="#" className='text-gray-400 text-2xl hover:text-white active:text-white'> 
                    <PiTelevisionLight />
                </Link>
                <Link to="#" className='text-gray-400 text-2xl hover:text-white active:text-white'>
                    <FaBookmark />
                </Link>
            </nav>
            <div className=''>
                <img  className='h-10 rounded-full' src={Avatar} alt="user-avatar" />

            </div>
        </header>
    </>
  )
}

export default Header
