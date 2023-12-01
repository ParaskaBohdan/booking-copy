import React, { useState } from 'react';
import './style.css';

const Search = ({ onChange }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
    onChange(value);
  };

  return (
    <div className=''>
      <form className='SearchBar' role="search">
        <input
          id="search"
          type="search"
          placeholder="Search..."
          autoFocus
          required
          value={searchValue}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default Search;