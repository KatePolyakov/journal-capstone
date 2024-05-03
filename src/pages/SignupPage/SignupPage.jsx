import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import axios from '../../axios';

import './SignupPage.scss';

export const SignupPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    // prevent default behaviour
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const fullName = event.target.fullName.value;

    try {
      await axios
        .post('/auth/register', {
          email: email,
          fullName: fullName,
          password: password,
        })
        .then((res) => {
          if (res.data === 'exist') {
            alert('User already exists');
          } else {
            navigate('/login');
          }
        })
        .catch((e) => {
          alert('wrong details');
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-page__wrapper">
        <form className="signup-page__form" onSubmit={handleSubmit}>
          <div className="signup-page__form-container">
            <label htmlFor="email" className="signup-page__form-label">
              <p>Email</p>
            </label>
            <input
              className="signup-page__form-input"
              type="email"
              placeholder="Enter Email"
              name="email"
              required
            />

            <label htmlFor="fullName" className="signup-page__form-label">
              <p>Username</p>
            </label>
            <input
              className="signup-page__form-input"
              type="text"
              placeholder="Enter Username"
              name="fullName"
              required
            />

            <label htmlFor="password" className="signup-page__form-label">
              <p>Password</p>
            </label>
            <input
              className="signup-page__form-input"
              type="password"
              placeholder="Enter Password"
              name="password"
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
