import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';

const SearchBar = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    const query = e.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };

  return (
    <div className='py-2'>
      <div className='flex gap-2 items-center rounded-md bg-primaryDark px-4 py-2'>
        <div className='text-white '>
            <IoSearch />
        </div>
        <input 
            type="text" 
            placeholder="Search for a movie or Tv series"
            value={searchQuery}
            onChange={handleChange}
            className='p-2 border-0 outline-none w-full placeholder:text-primaryGray text-white placeholder:text-xs placeholder-opacity-50 bg-primaryDark'
        />
        </div>
    </div>
  );
};

export default SearchBar;
