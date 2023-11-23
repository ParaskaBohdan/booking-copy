import React, { useState } from 'react';
import DatePicker from '../datePicker/DatePicker';
import DropCounter from '../dropCounter/DropCounter';
import Search from '../search/Search';
import './style.css';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [entryDate, setEntryDate] = useState('');
  const [exitDate, setExitDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const handleSearchChange = (value) => {
    setSearchValue(value);
    console.log('Search Value:', value);
  };

  const handleDateChange = (entry) => {
    setEntryDate(entry);
    console.log('Entry Date:', entry);
  };

  const handleCounterChange = (adults, children, rooms) => {
    setAdults(adults);
    setChildren(children);
    setRooms(rooms);
    console.log('Adults:', adults);
    console.log('Children:', children);
    console.log('Rooms:', rooms);
  };

  return (
    <div className="AllSearch">
      <Search onChange={handleSearchChange} />
      <DatePicker onChange={handleDateChange} />
      <DropCounter onChange={handleCounterChange} />
    </div>
  );
};

export default SearchBar;
