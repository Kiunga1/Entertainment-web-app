//import React from 'react'
import data from '../../public/data.json'
import MovieCard from '../components/MovieCard';

const TvSeriesPage = () => {
    const series = data.filter(item => item.category === 'TV Series');
  return (
    <div className='p-4'>
        <h1 className='text-xl text-white pb-3 '>TV Series</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {series.map((seriesItem, index) => (
                <MovieCard
                    key={index}
                    title={seriesItem.title}
                    imageUrl={seriesItem.thumbnail.regular.large}
                    rating={seriesItem.rating}
                    year={seriesItem.year}
                />
            ))}
        </div>
        
      
    </div>
  )
}

export default TvSeriesPage
