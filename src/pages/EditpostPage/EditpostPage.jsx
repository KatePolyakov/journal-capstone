import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import SimpleMdeReact from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

import './EditpostPage.scss';

export const EditpostPage = () => {
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
    <div className="editpost-page">
      <div className="editpost-page__wrapper">
        <p className="editpost-page__title">Edit your post</p>

        <form className="editpost-page__form" id="editpost-page__form">
          <div className="editpost-page__form-input">
            <input
              className="editpost-page__form-title"
              type="text"
              name="title"
              id="title"
              placeholder="Title..."></input>
          </div>
          <SimpleMdeReact options={options} className="editpost-page__form-text" />
          <div className="editpost-page__form-buttons-group">
            <button type="submit" className="editpost-page__form-save">
              <p>SAVE</p>
            </button>
            <Link to="/">
              <button className="editpost-page__form-cancel">
                <p>CANCEL</p>
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
