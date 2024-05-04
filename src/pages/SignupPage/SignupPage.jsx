import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegister, selectIsAuth } from '../../redux/slices/auth';
import { Link, Navigate } from 'react-router-dom';

import './SignupPage.scss';

export const SignupPage = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      fullName: 'Joe Joe',
      email: 'joe@mm.com',
      password: '12345',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values));

    if (!data.payload) {
      return alert('Failed to registration');
    }
    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div className="signup-page">
      <div className="signup-page__wrapper">
        <form className="signup-page__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="signup-page__form-container">
            <label htmlFor="email" className="signup-page__form-label">
              <p>Email</p>
            </label>
            <input
              {...register('email', { required: 'Enter your e-mail' })}
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
              {...register('fullName', { required: 'Enter your Full Name' })}
              required
            />

            <label htmlFor="password" className="signup-page__form-label">
              <p>Password</p>
            </label>
            <input
              {...register('password', { required: 'Enter your password' })}
              className="signup-page__form-input"
              type="password"
              placeholder="Enter Password"
              name="password"
              required
            />

            <button type="submit" className="signup-page__form-button" disabled={!isValid}>
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
