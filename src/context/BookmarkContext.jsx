import { createContext, useContext, useState } from 'react';

const BookmarkContext = createContext();

export const useBookmarks = () => {
  return useContext(BookmarkContext);
};

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  const toggleBookmark = id => {
    if (bookmarks.includes(id)) {
      setBookmarks(bookmarks.filter(item => item !== id));
    } else {
      setBookmarks([...bookmarks, id]);
    }
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, toggleBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};
