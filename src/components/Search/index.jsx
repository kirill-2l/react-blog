import React from 'react';
import { useHistory } from "react-router-dom";


const Search = ({ searchQuery, setSearchQuery, resetSearchQuery }) => {
  let history = useHistory();

  const handleSearch = value => {
    history.push(`/posts?search=${value}`)
    setSearchQuery(value);
  }
  return (
    <div className='sidebar__search'>
      <input
        type='text'
        className='sidebar__search-input'
        placeholder='Введите запрос'
        value={searchQuery}
        onChange={e => handleSearch(e.target.value)}
      />
      <input
        type='text'
        className='sidebar__search-input'
        placeholder='Введите запрос'
        value={searchQuery}
        onChange={() => resetSearchQuery}
      />
    </div>
  );
};

export default Search;
