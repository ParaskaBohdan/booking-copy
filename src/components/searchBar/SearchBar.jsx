import React, { useState, useEffect } from 'react';
import DatePicker from '../datePicker/DatePicker';
import DropCounter from '../dropCounter/DropCounter';
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
