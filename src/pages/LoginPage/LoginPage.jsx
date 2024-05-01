import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import './LoginPage.scss';

export const LoginPage = ({ setIsUserLoggedIn }) => {
  const history = useNavigate();

  const handleSubmit = async (event) => {
    // prevent default behaviour
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      // send username/password in a POST request to the API
      const response = await axios.post('http://localhost:8080/auth/login', {
        email: email,
        password: password,
      });
      localStorage.setItem('authToken', response.data);

      setIsUserLoggedIn(true);
      history('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-page__wrapper">
        <form className="login-page__form" onSubmit={handleSubmit}>
          <div className="login-page__form-container">
            <label htmlFor="email" className="login-page__form-label">
              <p>Email</p>
            </label>
            <input
              className="login-page__form-input"
              type="email"
              placeholder="Enter Email"
              name="email"
              required
            />

            <label htmlFor="password" className="login-page__form-label">
              <p>Password</p>
            </label>
            <input
              className="login-page__form-input"
              type="password"
              placeholder="Enter Password"
              name="password"
              required
            />

            <button type="submit" className="login-page__form-button">
              LOGIN
            </button>
            <Link to="/">
              <button type="button" className="login-page__form-cancel">
                CANCEL
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
