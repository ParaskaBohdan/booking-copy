import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import './style.css';

const DatePicker = ({ onChange }) => {
  const [entryDate, setEntryDate] = useState('');
  const [exitDate, setExitDate] = useState('');

    useEffect(() => {
        onChange({ entryDate, exitDate });
        // eslint-disable-next-line
    }, [entryDate, exitDate]);


  const handleDateChange = (type) => (event) => {
    const value = event.target.value;
    type === 'entry' ? setEntryDate(value) : setExitDate(value);
  };

  return (
    <div className='DatePicker' tabIndex="0">
      <TextField
        type="date"
        label="Entry Date"
        value={entryDate}
        onChange={handleDateChange('entry')}
      />
      —
      <TextField
        type="date"
        label="Exit Date"
        value={exitDate}
        onChange={handleDateChange('exit')}
      />
    </div>
  );
};

export default DatePicker;
