import React from 'react';
import { Link } from 'react-router-dom';

import './SignupPage.scss';

export const SignupPage = () => {
  return (
    <div className="signup-page">
      <div className="signup-page__wrapper">
        <form className="signup-page__form">
          <div className="signup-page__form-container">
            <label htmlFor="user-name" className="signup-page__form-label">
              <p>Username</p>
            </label>
            <input
              className="signup-page__form-input"
              type="text"
              placeholder="Enter Username"
              name="user-name"
              required
            />

            <label htmlFor="user-password" className="signup-page__form-label">
              <p>Password</p>
            </label>
            <input
              className="signup-page__form-input"
              type="password"
              placeholder="Enter Password"
              name="user-password"
              required
            />

            <button type="submit" className="signup-page__form-button">
              SIGN UP
            </button>
            <Link to="/">
              <button type="button" className="signup-page__form-cancel">
                CANCEL
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
