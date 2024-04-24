import { useState } from 'react';
import data from '../../public/data.json';
import MovieCard from '../components/MovieCard';
import TrendingMovieCard from '../components/TrendingMovieCard';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter the data based on search query
  const filteredData = data.filter(movie => 
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter the data to include only the trending movies
  const trendingMovies = filteredData.filter(movie => movie.isTrending);

  const handleSearch = query => {
    setSearchQuery(query);
  };

  return (
    <div className='px-4'>
      <SearchBar 
        handleSearch={handleSearch} 
        placeholder="Search for a movie or TV series"
      />
      <h2 className='text-white text-xl mt-6'>Trending</h2>
      <div className='flex gap-5 overflow-x-scroll'>
        {/* Map over the trendingMovies and rendering trendingMovie item cards. */}
        {trendingMovies.map((movie, index) => (
          <TrendingMovieCard
            key={index}
            title={movie.title}
            imageUrl={movie.thumbnail.trending.large} 
            rating={movie.rating}
            year={movie.year}
            category={movie.category}
          />
        ))}
      </div>
      <h2 className='text-white text-xl mt-6'>Movies</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {/* show all movies and series/ only show item searched by user. */}
        {filteredData.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            imageUrl={movie.thumbnail.regular.large} 
            rating={movie.rating}
            year={movie.year}
            category={movie.category}
          />
        ))}
      </div>  
    </div>      
  );
};

export default Home;
