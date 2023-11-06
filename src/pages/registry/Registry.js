import React, { Component } from 'react';
import './style.css';

class Registry extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleRegistration = () => {
    const { password, confirmPassword } = this.state;

    // Виконайте валідацію даних перед відправкою на сервер

    if (password !== confirmPassword) {
      alert('Паролі не співпадають');
      return;
    }

    // Відправка даних на сервер для реєстрації
    // Тут ви можете використовувати функцію або бібліотеки для відправки POST-запиту на сервер

    // Очищення полів форми після реєстрації
    this.setState({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    alert('Реєстрація успішна');
  };

  render() {
    const { name, email, password, confirmPassword } = this.state;

    return (
      <div className="auth-page">
        <h2>Реєстрація</h2>
        <div className="auth-form">
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            placeholder="Ім'я"
          />
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
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleInputChange}
            placeholder="Підтвердіть пароль"
          />
          <button onClick={this.handleRegistration}>Зареєструватися</button>
        </div>
      </div>
    );
  }
}

export default Registry;
