import { useState } from 'react';
import data from '../../public/data.json';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar'; 

const TvSeriesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter TV series based on search query
  const filteredSeries = data.filter(series => 
    series.category === 'TV Series' && 
    series.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = query => {
    setSearchQuery(query);
  };

  return (
    <div className='p-4'>
      <h1 className='text-xl text-white pb-3'>TV Series</h1>
      {/* Use the SearchBar component */}
      <SearchBar 
        handleSearch={handleSearch} 
        placeholder="Search for a Tv series"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {/* Render MovieCard for each TV series */}
        {filteredSeries.map((seriesItem, index) => (
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
  );
};

export default TvSeriesPage;
