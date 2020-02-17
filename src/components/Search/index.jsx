import React from 'react';

const Search = ({ searchQuery, setSearchQuery, resetSearchQuery }) => {
  const handleSearch = value => {
    setSearchQuery(value);
  };

  return (
    <div className='sidebar__search'>
      <input
        type='text'
        className='sidebar__search-input'
        placeholder='Введите запрос'
        value={searchQuery}
        onChange={e => handleSearch(e.target.value)}
      />
      {searchQuery && (
        <span
          className='sidebar__search-clear'
          onClick={() => resetSearchQuery()}
        >
          {
            <svg
              viewBox='64 64 896 896'
              focusable='false'
              data-icon='close-circle'
              width='12px'
              height='12px'
              fill='#828282'
              aria-hidden='true'
            >
              <path d='M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z'></path>
            </svg>
          }
        </span>
      )}
    </div>
  );
};

export default Search;
