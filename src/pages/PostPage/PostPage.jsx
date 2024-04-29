import React from 'react';

import './PostPage.scss';
import { Post } from '../../components/Post/Post';
import { Comments } from '../../components/Comments/Comments';

export const PostPage = () => {
  return (
    <div className="post-page">
      <div className="post-page__wrapper">
        <Post />
        <Comments />
      </div>
    </div>
  );
};
