import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth, selectIsAuth } from '../../redux/slices/auth';

import './LoginPage.scss';

export const LoginPage = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: 'lololups@mm.com',
      password: '12345',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));

    if (!data.payload) {
      return alert('Failed to login');
    }
    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div className="login-page">
      <div className="login-page__wrapper">
        <form className="login-page__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="login-page__form-container">
            <label htmlFor="email" className="login-page__form-label">
              <p>Email</p>
            </label>
            <input
              {...register('email', { required: 'Enter your email' })}
              error={Boolean(errors.email?.message)}
              helperText={errors.email?.message}
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
              {...register('password', { required: 'Enter your password' })}
              error={Boolean(errors.password?.message)}
              helperText={errors.password?.message}
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
