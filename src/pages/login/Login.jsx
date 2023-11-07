import React, { useState } from 'react';
import { API_URL } from '../../index';
import axios from 'axios';
import './style.css';
import { useNavigate } from 'react-router-dom';

function Signin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleRegistration = async () => {
    const userData = {
      username: name,
      email: email,
      password: password,
    };

    const token = API_URL + '/api/auth/jwt/create/';
    try {
      console.log('Login started');
      console.log(userData);
      const tokenResponse = await axios.post(token, userData);
      console.log(tokenResponse.data);
      console.log('Login successful:', tokenResponse.data);
      localStorage.setItem('token', tokenResponse.data.access);
      navigate('/');
      window.location.reload();
    } catch (error) {
      console.error('Failed:', error);
    }
  };

  return (
    <div className="auth-page">
      <h2>Sign in</h2>
      <div className="auth-form">
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          placeholder="Username"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
          placeholder="Password"
        />
        <button onClick={handleRegistration}>Sign in</button>
      </div>
    </div>
  );
}

export default Signin;
