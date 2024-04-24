import { useState } from 'react';
import MovieCard from '../components/MovieCard';
import data from '../../public/data.json'; 
import SearchBar from '../components/SearchBar'; 

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter movies based on search query
  const filteredMovies = data.filter(movie => 
    movie.category === 'Movie' && 
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = query => {
    setSearchQuery(query);
  };

  return (
    <div className='p-4'>
      <h1 className='text-xl text-white'>Movies</h1>
      {/* Use the SearchBar component */}
      <SearchBar handleSearch={handleSearch} />
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {/* Render MovieCard for each movie */}
        {filteredMovies.map((movie, index) => (
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
