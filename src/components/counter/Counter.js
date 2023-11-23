import './style.css'
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';


class Counter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: props.default || 0,
      };
    }
  
    handleIncrement = () => {
      const { count } = this.state;
      const { max } = this.props;
      if (max === undefined || count < max) {
        this.setState({ count: count + 1 }, () => {
          if (this.props.onChange) {
            this.props.onChange(this.state.count);
          }
        });
      }
    }
  
    handleDecrement = () => {
      const { count } = this.state;
      const { min } = this.props;
      if (min === undefined || count > min) {
        this.setState({ count: count - 1 }, () => {
          if (this.props.onChange) {
            this.props.onChange(this.state.count);
          }
        });
      }
    }
  
    render() {
      return (
        <div className="Сounter">
          <button className="plus" onClick={this.handleIncrement}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
            <input type="text" value={this.state.count} readOnly />
            <button className="minus" onClick={this.handleDecrement}>
                <FontAwesomeIcon icon={faMinus} />
            </button>
        </div>
      );
    }
  }
  
export default Counter;