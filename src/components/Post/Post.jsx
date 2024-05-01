import React from 'react';

import './Post.scss';

export const Post = ({ onePost }) => {
  return (
    <>
      {onePost ? (
        <div className="post" key={onePost._id}>
          <div className="post__wrapper">
            <div className="post__header">
              <img src={onePost.user.avatarUrl} alt="Profile" className="post__profile-img" />
              <div className="post__name-group">
                <p className="post__name">{onePost.user.fullName}</p>
                <p className="post__date">{onePost.user.createdAt}</p>
              </div>
            </div>
            <div className="post__main">
              {onePost.imageUrl ? (
                <img src={onePost.imageUrl} alt="main" className="post__main-img" />
              ) : (
                ''
              )}
              <p className="post__title">{onePost.title}</p>
              <p className="post__text">{onePost.text}</p>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};
