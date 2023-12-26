import React, { useState } from 'react';
import { API_URL } from '../../index';
import axios from 'axios';
import './style.css';
import { useNavigate } from 'react-router-dom';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fail, setFail] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleRegistration = async () => {
    const userData = {
      email: email,
      password: password,
    };

    const token = API_URL + '/api/auth/jwt/create/';
    try {
      const tokenResponse = await axios.post(token, userData);
      localStorage.setItem('access_token', tokenResponse.data.access);
      localStorage.setItem('refresh_token', tokenResponse.data.refresh);
      navigate('/');
      window.location.reload();
    } catch (error) {
        setFail(true);
      console.error('Failed:', error);
    }
  };

  return (
    <div className="auth-page">
      <h2>Sign in</h2>
      <div className="auth-form">
      {fail && <p>Failed to sign in</p>}
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
