//import React from 'react';
import MovieCard from '../components/MovieCard';
import data from '../../public/data.json'; 

const MoviesPage = () => {
  // Filter the data array to include only movies
  const movies = data.filter(item => item.category === 'Movie');

  return (
    <div className='p-4'>
      <h1 className='text-xl text-white'>Movies</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {/* Map over the movies array and render MovieCard for each movie */}
        {movies.map((movie, index) => (
          <MovieCard
            key={index} 
            title={movie.title}
            imageUrl={movie.thumbnail.regular.large} 
            rating={movie.rating}
            year={movie.year}
            
          />
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
