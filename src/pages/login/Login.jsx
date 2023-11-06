import React, { Component } from 'react';
import './style.css';

class AuthPage extends Component {
  state = {
    email: '',
    password: '',
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleLogin = () => {
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="auth-page">
        <h2>Авторизація</h2>
        <div className="auth-form">
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
          <button onClick={this.handleLogin}>Увійти</button>
        </div>
      </div>
    );
  }
}

export default AuthPage;
