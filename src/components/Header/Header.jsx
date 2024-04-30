import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

export const Header = () => {
  // how can we determine if the user is logged in?
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(!!localStorage.getItem('authToken'));

  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <Link to="/">
            <p>JOURNAL</p>
          </Link>
        </div>

        {isUserLoggedIn ? (
          <div className="header__buttonsIn">
            <Link to="/new-post">
              <button className="header__buttonsIn-post">CREATE POST</button>
            </Link>
            <button className="header__buttonsIn-logout">LOGOUT</button>
          </div>
        ) : (
          <div className="header__buttonsOut">
            <Link to="/login">
              <button className="header__buttonsOut-login">LOGIN</button>
            </Link>
            <Link to="sign-up">
              <button className="header__buttonsOut-create">CREATE ACCOUNT</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
