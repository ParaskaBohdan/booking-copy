import React, { useState, useEffect } from 'react';
import DatePicker from '../datePicker/DatePicker';
<<<<<<< HEAD
import DropCounter from '../dropCounter/dropCounter';
=======
import DropCounter from '../dropCounter/dropCounter';
>>>>>>> d397904abd5e7f73c884bca9d363033b849545c4
import Search from '../search/Search';
import './style.css';

const SearchBar = ({onChange}) => {
  const [searchValue, setSearchValue] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [dates, setDates] = useState({ entryDate: '', exitDate: '' });

  

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };
  
  const handleDateChange = (date) => {
    setDates(date);
  };

  const handleCounterChange = (guests) => {
    setAdults(guests.adults);
    setChildren(guests.children);
    setRooms(guests.rooms);
    if (typeof onChange === 'function') {
        onChange({ searchValue, dates, adults, children, rooms });
      }
  };

//   useEffect(() => {}, [searchValue]);

//   useEffect(() => {
// }, [dates]);

  useEffect(() => {
  }, [adults, children, rooms]);
  

  return (
    <div className="AllSearch">
      <Search onChange={handleSearchChange} />
      <DatePicker onChange={handleDateChange} />
      <DropCounter onClick={handleCounterChange} />
    </div>
  );
};

export default SearchBar;
