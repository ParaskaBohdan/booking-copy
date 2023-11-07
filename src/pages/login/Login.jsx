import React, { Component } from 'react';
import { API_URL } from '../../index';
import axios from 'axios';
import './style.css';

class AuthPage extends Component {
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
    
        const token = API_URL + '/api/auth/jwt/create/';
    
        try {
          console.log('login started');
          console.log(userData);
          const tokenResponse = await axios.post(token, userData);
          console.log(tokenResponse.data);
          console.log('login successful:', tokenResponse.data);
          localStorage.setItem('token', tokenResponse.data.access);
          // Додайте обробку успішної реєстрації тут, наприклад, перенаправлення на іншу сторінку
        } catch (error) {
          console.error('Failed:', error);
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
            <h2>sign in</h2>
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
              <button onClick={this.handleRegistration}>sign in</button>
            </div>
          </div>
        );
      }
}

export default AuthPage;
