import React from 'react';
import ProfileImg from '../../assets/download.jpg';
import MainPhoto from '../../assets/restaurantPhoto.jpeg';
import './Post.scss';

export const Post = () => {
  return (
    <div className="post">
      <div className="post__wrapper">
        <div className="post__header">
          <img src={ProfileImg} alt="Profile" className="post__profile-img" />
          <div className="post__name-group">
            <p className="post__name">Blogs_Name</p>
            <p className="post__date">29 april 2024</p>
          </div>
        </div>
        <div className="post__main">
          <img src={MainPhoto} alt="main" className="post__main-img" />
          <p className="post__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <p className="post__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Dictum varius duis at consectetur lorem
            donec massa sapien. Adipiscing vitae proin sagittis nisl. Scelerisque fermentum dui
            faucibus in ornare quam viverra orci. Fringilla phasellus faucibus scelerisque eleifend
            donec pretium vulputate sapien nec. Diam vulputate ut pharetra sit amet. Pharetra et
            ultrices neque ornare aenean. Sit amet massa vitae tortor condimentum lacinia quis.
          </p>
        </div>
      </div>
    </div>
  );
};
