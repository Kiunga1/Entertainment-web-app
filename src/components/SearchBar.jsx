import React from 'react'
import { IoSearch } from 'react-icons/io5'

const SearchBar = () => {
  return (
    <div className='py-2'>
      <div className='flex gap-2 items-center rounded-md bg-primaryDark px-4 py-2'>
        <div className='text-white '>
            <IoSearch />
        </div>
        <input 
            type="text" 
            placeholder="Search for a movie or Tv series"
            className='p-2 border-0 outline-none w-full placeholder:text-primaryGray text-white placeholder:text-xs placeholder-opacity-50 bg-primaryDark'
        />
        </div>
    </div>
  )
}

export default SearchBar
