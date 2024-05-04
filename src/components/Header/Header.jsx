import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout, selectIsAuth } from '../../redux/slices/auth';

import './Header.scss';

export const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const onClickLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
    }
  };

  return (
    <div className="header">
      <div className="header__wrapper">
        <Link className="header__logo" to="/">
          JOURNAL
        </Link>
        <div>
          {isAuth ? (
            <div className="header__buttons-in">
              <Link to="/add-post">
                <button className="header__buttons-in-post">CREATE POST</button>
              </Link>
              <button className="header__buttons-in-logout" onClick={onClickLogout}>
                LOGOUT
              </button>
            </div>
          ) : (
            <div className="header__buttons-out">
              <Link to="/login">
                <button className="header__buttons-out-login">LOGIN</button>
              </Link>
              <Link to="/register">
                <button className="header__buttons-out-create">CREATE ACCOUNT</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
