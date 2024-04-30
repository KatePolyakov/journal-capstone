import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import SimpleMdeReact from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

import './NewpostPage.scss';

export const NewpostPage = () => {
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
          <SimpleMdeReact options={options} className="newpost-page__form-text" />
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
