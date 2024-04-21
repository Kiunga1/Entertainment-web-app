/* eslint-disable react/prop-types */
// import React from 'react'
import { MdLocalMovies } from 'react-icons/md'
const TrendingMovieCard = ({imageUrl, title, rating, year, category}) => {
  return (
    <div className="bg-primaryDark py-4 rounded-md shadow-md relative shrink-0">
      <img src={imageUrl} alt={title} className="rounded-md h-36 w-60 md:h-56 md:w-auto object-cover" />
      <div className="absolute bottom-5 left-0 h-full flex flex-col justify-end">
        <div className="flex content-center gap-2 px-4">
          <p className="text-sm text-primaryGray">{rating}</p>
          <span className='h-1 w-1 rounded-full bg-primaryGray mt-2'></span>
          <MdLocalMovies className="text-primaryGray text-lg" />
          <p className='text-primaryGray text-sm'>{category}</p>
          <span className='h-1 w-1 rounded-full bg-primaryGray mt-2'></span>
          <p className='text-primaryGray text-sm'>{year}</p>
        </div>
        <h4 className="text-md font-bold pb-2 text-white px-4">{title}</h4>
      </div>
    </div>
  )
}

export default TrendingMovieCard
