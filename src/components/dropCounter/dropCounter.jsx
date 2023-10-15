import './style.css';
import Counter from '../counter/Counter.js';
import React, { Component } from 'react';

class DropCounter extends Component {
  state = {
    isOpen: false,
    adults: 1,
    children: 0,
    rooms: 1,
  };

  toggleDropdown = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  handleAdultsChange = (value) => {
    this.setState({ adults: value }, () => {
      this.updateButtonText();
    });
  };

  handleChildrenChange = (value) => {
    this.setState({ children: value }, () => {
      this.updateButtonText();
    });
  };

  handleRoomsChange = (value) => {
    this.setState({ rooms: value }, () => {
      this.updateButtonText();
    });
  };

  updateButtonText() {
    const { adults, children, rooms } = this.state;
    const buttonText = `${adults} дорослих · ${children} дітей · ${rooms} номерів`;
    this.setState({ buttonText });
  }

  render() {
    const { isOpen, adults, children, rooms } = this.state;
    const buttonText = `${adults} дорослих · ${children} дітей · ${rooms} номерів`;

    return (
      <div className={`dropdown ${isOpen ? 'show' : ''}`}>
        <button onClick={this.toggleDropdown} className="dropbtn">
          {buttonText}
        </button>
        <div id="myDropdown" className={`dropdown-content ${isOpen ? 'show' : ''}`}>
          <p>Дорослі :</p>
          <Counter min={1} default={adults} onChange={this.handleAdultsChange} />
          <p>Діти :</p>
          <Counter min={0} default={children} onChange={this.handleChildrenChange} />
          <p>Номери :</p>
          <Counter min={1} default={rooms} onChange={this.handleRoomsChange} />
        </div>
      </div>
    );
  }
}

export default DropCounter;