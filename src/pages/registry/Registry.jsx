import React, { useState } from 'react';
import { API_URL } from '../../index';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './style.css';

function Registry() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fail, setFail] = useState(false);

  const navigate = useNavigate();

  const handleRegistration = async () => {
    const userData = {
      username: name,
      email: email,
      password: password,
    };

    const URL = API_URL + '/api/auth/users/';
    const token = API_URL + '/api/auth/jwt/create/';

    try {
//eslint-disable-next-line
      const response = await axios.post(URL, userData);
      const tokenResponse = await axios.post(token, userData);
      localStorage.setItem('access_token', tokenResponse.data.access);
      localStorage.setItem('refresh_token', tokenResponse.data.refresh);
      navigate('/home');
      window.location.reload();
    } catch (error) {
        setFail(true);
    }
  };

  return (
    <div className="auth-page">
      <h2>sign up</h2>
      <div className="auth-form">
      {fail && <p>Failed to sign up</p>}
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Username"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={handleRegistration}>sign up</button>
      </div>
    </div>
  );
}

export default Registry;
