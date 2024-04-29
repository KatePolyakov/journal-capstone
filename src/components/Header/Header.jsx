import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

export const Header = () => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <Link to="/">
            <p>JOURNAL</p>
          </Link>
        </div>

        <div className="header__buttonsOut">
          <button className="header__buttonsOut-login">LOGIN</button>
          <button className="header__buttonsOut-create">CREATE ACCOUNT</button>
        </div>

        <div className="header__buttonsIn">
          <button className="header__buttonsIn-post">CREATE POST</button>
          <button className="header__buttonsIn-logout">LOGOUT</button>
        </div>
      </div>
    </div>
  );
};