import React from 'react';

const Search = () => {
  return (
    <div className='sidebar__search'>
      <input
        type='text'
        className='sidebar__search-input'
        placeholder='Введите запрос'
        // onChange={}
      />
    </div>
  );
};

export default Search;
