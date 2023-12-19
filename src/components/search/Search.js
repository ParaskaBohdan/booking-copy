import React, { useState } from 'react';
import { TextField } from '@mui/material';
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
      <TextField
        fullWidth
        label="Search..."
        value={searchValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;
