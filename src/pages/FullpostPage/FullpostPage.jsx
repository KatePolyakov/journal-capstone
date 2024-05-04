import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../axios';

import { Post } from '../../components/Post/Post';
import { Comments } from '../../components/Comments/Comments';

import './FullpostPage.scss';

export const FullpostPage = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/posts/${id}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        alert('Error to get post');
      });
  }, []);

  console.log(data);

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className="post">
      <div className="post__wrapper">
        <Post
          id={data._id}
          title={data.title}
          imageUrl={data.imageUrl ? `http://localhost:4444${data.imageUrl}` : ''}
          user={data.user}
          createdAt={data.createdAt}
          viewsCount={data.viewsCount}
          commentsCount={3}
          tags={data.tags}
          isFullPost>
          <p className="post__text">{data.text}</p>
        </Post>
        <Comments />
      </div>
    </div>
  );
};
