import React from 'react';

import ProfileImg from '../../assets/images.jpeg';
import './Comments.scss';
import { AddComment } from '../AddComment/AddComment';

export const Comments = () => {
  return (
    <div className="comments">
      <div className="comments__wrapper">
        <p className="comments__title">3 Comments</p>

        <AddComment />

        <div className="comments__comment">
          <div className="comments__comment-wrapper">
            <div className="comments__comment-header">
              <img src={ProfileImg} alt="Profile" className="comments__comment-profile-img" />
              <div className="comments__comment-group">
                <p className="comments__comment-name">Blogs_Name</p>
                <p className="comments__comment-date">29 april 2024</p>
              </div>
            </div>
            <div className="comments__comment-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.{' '}
              </p>
            </div>
          </div>
        </div>

        <div className="comments__comment">
          <div className="comments__comment-wrapper">
            <div className="comments__comment-header">
              <img src={ProfileImg} alt="Profile" className="comments__comment-profile-img" />
              <div className="comments__comment-group">
                <p className="comments__comment-name">Blogs_Name</p>
                <p className="comments__comment-date">29 april 2024</p>
              </div>
            </div>
            <div className="comments__comment-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.{' '}
              </p>
            </div>
          </div>
        </div>

        <div className="comments__comment">
          <div className="comments__comment-wrapper">
            <div className="comments__comment-header">
              <img src={ProfileImg} alt="Profile" className="comments__comment-profile-img" />
              <div className="comments__comment-group">
                <p className="comments__comment-name">Blogs_Name</p>
                <p className="comments__comment-date">29 april 2024</p>
              </div>
            </div>
            <div className="comments__comment-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
