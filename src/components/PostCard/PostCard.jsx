import React from 'react';

import './PostCard.scss';
import { Link } from 'react-router-dom';

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
            <Link to={`/posts/${post._id}`}>
              <div className="post-card__main">
                {post.imageUrl ? (
                  <img src={post.imageUrl} alt="main" className="post-card__main-img" />
                ) : (
                  ''
                )}
                <p className="post-card__title">{post.title}</p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};
