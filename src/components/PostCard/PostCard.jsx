import React from 'react';

import './PostCard.scss';

export const PostCard = ({ getAllposts }) => {
  return (
    <>
      {getAllposts?.map((post) => (
        <div className="post-card" key={post._id}>
          <div className="post-card__wrapper">
            <div className="post-card__header">
              <img src={post.user.avatarUrl} alt="Profile" className="post-card__profile-img" />
              <div className="post-card__name-group">
                <p className="post-card__name">{post.user.fullName}</p>
                <p className="post-card__date">{post.createdAt}</p>
              </div>
            </div>
            <div className="post-card__main">
              <img src={post.imageUrl} alt="main" className="post-card__main-img" />
              <p className="post-card__title">{post.title}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
