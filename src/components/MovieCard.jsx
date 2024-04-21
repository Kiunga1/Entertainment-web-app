/* eslint-disable react/prop-types */
// import React from 'react'
import { MdLocalMovies } from 'react-icons/md'

const MovieCard = ({ imageUrl, title, rating, category, year }) => {
  return (
    <div className='py-3'>
      <div>
        <img className='h-28  md:h-44  rounded-md' src={imageUrl} alt={title} />
        <div className='flex content-center gap-2 p-2'>
          <p className='text-sm text-primaryGray'>{year}</p>
          <span className='h-1 w-1 rounded-full bg-primaryGray mt-2'></span>
          <MdLocalMovies className="text-lg text-primaryGray " />
          <p className='text-sm text-primaryGray'>{category}</p>
          <span className='h-1 w-1 rounded-full bg-primaryGray mt-2'></span>
          <p className='text-sm text-primaryGray'>{rating}</p>
        </div>
        <h2 className='text-white text-lg p-2'>{title}</h2>
      </div>
    </div>
  )
}

export default MovieCard
