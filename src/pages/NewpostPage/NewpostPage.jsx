import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
//import axios from '../../axios';

import axios from 'axios';


import SimpleMdeReact from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

import './NewpostPage.scss';

export const NewpostPage = ({ isUserLoggedIn }) => {
  const [user, setUser] = useState(null);

  console.log('isUser', isUserLoggedIn);

  // useEffect (as soon as the component mounts)
  useEffect(() => {
    const fetchProfile = async () => {
      // get the token from local storage
      const token = JSON.parse(localStorage.getItem('authToken'));
      // make a GET request to /profile
      // add it as a header
      const response = await axios.get('http://localhost:8080/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(response.data);
    };

    fetchProfile();
  }, []);

  console.log('user', user);

  const options = useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '250px',
      autofocus: true,
      placeholder: 'Text...',
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    [],
  );
  return (
    <div className="newpost-page">
      <div className="newpost-page__wrapper">
        <p className="newpost-page__title">Create a new post</p>

        <form className="newpost-page__form" id="newpost-page__form">
          <div className="newpost-page__form-input">
            <input
              className="newpost-page__form-title"
              type="text"
              name="title"
              id="title"
              placeholder="Title..."></input>
          </div>
          <SimpleMdeReact
            options={options}
            className="newpost-page__form-text"
            type="text"
            name="text"
          />
          <div className="newpost-page__form-buttons-group">
            <button type="submit" className="newpost-page__form-submit">
              <p>SUBMIT</p>
            </button>
            <Link to="/">
              <button className="newpost-page__form-cancel">
                <p>CANCEL</p>
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
