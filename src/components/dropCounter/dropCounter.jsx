import React, { useState, useEffect } from 'react';
import Counter from '../counter/Counter.js';
import './style.css';

const DropCounter = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  useEffect(() => {
    const sendChanges = () => {
      props.onClick({ adults, children, rooms });
    };
    sendChanges();
  }, [adults, children, rooms, props]);
  
  
  const sendChanges = () => {
    props.onClick({ adults, children, rooms });
  };

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleAdultsChange = (value) => {
    setAdults((prevAdults) => {
      sendChanges();
      return value;
    });
  };

  const handleChildrenChange = (value) => {
    setChildren(value);
    sendChanges();
  };

  const handleRoomsChange = (value) => {
    setRooms(value);
    sendChanges();
  };

  const buttonText = `${adults} adults · ${children} childs · ${rooms} apartment`;

  return (
    <div className={`dropdown ${isOpen ? 'show' : ''}`}>
      <button onClick={toggleDropdown} className="dropbtn">
        {buttonText}
      </button>
      <div id="myDropdown" className={`dropdown-content ${isOpen ? 'show' : ''}`}>
        <p>Adults :</p>
        <Counter min={1} default={adults} onChange={handleAdultsChange} />
        <p>Childs :</p>
        <Counter min={0} default={children} onChange={handleChildrenChange} />
        <p>Apartment :</p>
        <Counter min={1} default={rooms} onChange={handleRoomsChange} />
      </div>
    </div>
  );
};

export default DropCounter;
