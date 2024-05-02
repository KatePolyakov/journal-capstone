import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from '../../axios';

import { Post } from '../../components/Post/Post';
import { Comments } from '../../components/Comments/Comments';

import './PostPage.scss';



export const PostPage = () => {
  const { id } = useParams();

  const [onePost, setOnePost] = useState();

  useEffect(() => {
    const fetchOnePost = async () => {
      try {
        const response = await axios.get(`/posts/${id}`);
        setOnePost(response.data);
      } catch (error) {
        console.error('Error fetching all posts:', error);
      }
    };
    fetchOnePost();
  }, [id]);
  return (
    <div className="post-page">
      <div className="post-page__wrapper">
        <Post onePost={onePost} />
        <Comments />
      </div>
    </div>
  );
};
