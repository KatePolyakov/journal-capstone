import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './SignupPage.scss';
import axios from 'axios';

export const SignupPage = () => {
  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setfullName] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post('http://localhost:8080/auth/register', {
          email,
          fullName,
          password,
        })
        .then((res) => {
          if (res.data === 'exist') {
            alert('User already exists');
          } else if (res.data === 'notexist') {
            history('/', { state: { id: email } });
          }
        })
        .catch((e) => {
          alert('wrong details');
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="signup-page">
      <div className="signup-page__wrapper">
        <form className="signup-page__form">
          <div className="signup-page__form-container">
            <label htmlFor="user-email" className="signup-page__form-label">
              <p>Email</p>
            </label>
            <input
              className="signup-page__form-input"
              type="text"
              placeholder="Enter Email"
              name="user-email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />

            <label htmlFor="user-name" className="signup-page__form-label">
              <p>Username</p>
            </label>
            <input
              className="signup-page__form-input"
              type="text"
              placeholder="Enter Username"
              name="user-name"
              onChange={(e) => {
                setfullName(e.target.value);
              }}
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
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />

            <button type="submit" className="signup-page__form-button" onClick={submit}>
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
