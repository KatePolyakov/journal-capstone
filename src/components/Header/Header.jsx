import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

export const Header = ({ isUserLoggedIn, setIsUserLoggedIn }) => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <Link to="/">
            <p>JOURNAL</p>
          </Link>
        </div>

        {isUserLoggedIn ? (
          <div className="header__buttons-in">
            <Link to="/new-post">
              <button className="header__buttons-in-post">CREATE POST</button>
            </Link>
            <button
              className="header__buttons-in-logout"
              onClick={() => {
                localStorage.removeItem('authToken');
                setIsUserLoggedIn(false);
              }}>
              LOGOUT
            </button>
          </div>
        ) : (
          <div className="header__buttons-out">
            <Link to="/login">
              <button className="header__buttons-out-login">LOGIN</button>
            </Link>
            <Link to="/sign-up">
              <button className="header__buttons-out-create">CREATE ACCOUNT</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
