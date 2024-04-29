import React from 'react';

import { PostCard } from '../../components/PostCard/PostCard';

import './HomePage.scss';

export const HomePage = () => {
  return (
    <div className="homePage">
      <div className="homePage__wrapper">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};
