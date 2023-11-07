import React, { Component } from 'react';
import { API_URL } from '../../index';
import axios from 'axios';
import './style.css';

class Registry extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleRegistration = async () => {
    const { name, email, password } = this.state;

    const userData = {
      username: name,
      email: email,
      password: password,
    };

    const URL = API_URL + '/api/auth/users/'; 
    const token = API_URL + '/api/auth/jwt/create/';

    try {
      const response = await axios.post(URL, userData);
      const tokenResponse = await axios.post(token, userData);
      console.log(tokenResponse.data);
      console.log('User registration successful:', response.data);
      console.log('User registration successful:', tokenResponse.data);
      localStorage.setItem('token', tokenResponse.data.access);
        
    } catch (error) {

    }


    // this.setState({
    //   name: '',
    //   email: '',
    //   password: '',
    // });

  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div className="auth-page">
        <h2>sign up</h2>
        <div className="auth-form">
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            placeholder="Username"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
            placeholder="Password"
          />
          <button onClick={this.handleRegistration}>sign up</button>
        </div>
      </div>
    );
  }
}

export default Registry;
