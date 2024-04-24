/* eslint-disable react/prop-types */
import { CiBookmark } from 'react-icons/ci';
import { FaBookmark } from 'react-icons/fa';
import { MdLocalMovies } from 'react-icons/md';
import { useBookmarks } from '../context/BookmarkContext';

const MovieCard = ({ imageUrl, title, rating, category, year }) => {
  const { bookmarks, toggleBookmark } = useBookmarks();
  const isBookmarked = bookmarks.includes(title); // Check if the movie is bookmarked

  const handleToggleBookmark = () => {
    toggleBookmark(title); // Toggle the bookmark status
  };

  return (
    <div className='py-3 relative'>
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
        <div className='bg-primaryDark bg-opacity-75 absolute p-2 rounded-full top-4 right-4 '>
          {isBookmarked ? (
            <FaBookmark className='text-white' onClick={handleToggleBookmark} />
          ) : (
            <CiBookmark className='fill-white' onClick={handleToggleBookmark} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

