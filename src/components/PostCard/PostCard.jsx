import React from 'react';

import ProfileImg from '../../assets/download.jpg';
import MainPhoto from '../../assets/restaurantPhoto.jpeg';
import './PostCard.scss';

export const PostCard = () => {
  return (
    <div className="post-card">
      <div className="post-card__wrapper">
        <div className="post-card__header">
          <img src={ProfileImg} alt="Profile" className="post-card__profile-img" />
          <div className="post-card__name-group">
            <p className='post-card__name'>Blogs_Name</p>
            <p className='post-card__date'>29 april 2024</p>
          </div>
        </div>
        <div className='post-card__main'>
          <img src={MainPhoto} alt='main' className='post-card__main-img'/>
          <p className='post-card__title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>
    </div>
  );
};
