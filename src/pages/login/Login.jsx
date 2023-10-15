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
    // Реалізуйте логіку авторизації тут (наприклад, з використанням Firebase або інших сервісів).
    // Ваш код авторизації повинен бути розміщений тут.
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
            placeholder="Електронна пошта"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
            placeholder="Пароль"
          />
          <button onClick={this.handleLogin}>Увійти</button>
        </div>
      </div>
    );
  }
}

export default AuthPage;
