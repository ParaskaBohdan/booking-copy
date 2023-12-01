import React, { useState, useEffect } from 'react';
import './style.css';

const DatePicker = ({ onChange }) => {
  const [entryDate, setEntryDate] = useState('');
  const [exitDate, setExitDate] = useState('');

  useEffect(() => {
    onChange({ entryDate, exitDate });
  }, [entryDate, exitDate]);

  const handleEntryDateChange = (event) => {
    const value = event.target.value;
    setEntryDate(value);
  };

  const handleExitDateChange = (event) => {
    const value = event.target.value;
    setExitDate(value);
  };

  return (
    <>
      <div className='DatePicker' tabIndex="0">
        <input
          type="date"
          value={entryDate}
          onChange={handleEntryDateChange}
        />
        —
        <input
          type="date"
          value={exitDate}
          onChange={handleExitDateChange}
        />
      </div>
    </>
  );
};

export default DatePicker;
