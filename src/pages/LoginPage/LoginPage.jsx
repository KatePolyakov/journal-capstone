import React from 'react';
import { Link } from 'react-router-dom';

import './LoginPage.scss';

export const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-page__wrapper">
        <form className="login-page__form">
          <div className="login-page__form-container">
            <label htmlFor="user-name" className="login-page__form-label">
              <p>Username</p>
            </label>
            <input
              className="login-page__form-input"
              type="text"
              placeholder="Enter Username"
              name="user-name"
              required
            />

            <label htmlFor="user-password" className="login-page__form-label">
              <p>Password</p>
            </label>
            <input
              className="login-page__form-input"
              type="password"
              placeholder="Enter Password"
              name="user-password"
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
