import { useState } from 'react';
import { useBookmarks } from '../context/BookmarkContext';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import data from '../../public/data.json';

const BookmarkedPage = () => {
  const { bookmarks } = useBookmarks();
  const [searchQuery, setSearchQuery] = useState('');

  // Filter data to get bookmarked movies based on search query
  const filteredMovies = data.filter(movie => 
    bookmarks.includes(movie.title) && 
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = query => {
    setSearchQuery(query);
  };

  return (
    <div className='p-6'>
      <h1 className='text-xl text-white'>Bookmarked Movies</h1>
      <SearchBar 
        handleSearch={handleSearch} 
        placeholder="Search for a movie or TV series"
      />
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {filteredMovies.map(movie => (
          <MovieCard 
            key={movie.id} 
            {...movie}
            isBookmarked={true} 
            imageUrl={movie.thumbnail.regular.large} 
          />
        ))}
      </div>
    </div>
  );
};

export default BookmarkedPage;
