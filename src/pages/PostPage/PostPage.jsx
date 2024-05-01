import React, { useEffect, useState } from 'react';

import { Post } from '../../components/Post/Post';
import { Comments } from '../../components/Comments/Comments';

import './PostPage.scss';
import axios from 'axios';
import { useParams } from 'react-router';

export const PostPage = () => {

  const { id } = useParams();

  const [onePost, setOnePost ] = useState();

  useEffect(() => {
    const fetchOnePost = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/posts/${id}`);
        //console.log(response.data);
        setOnePost(response.data);
      } catch (error) {
        console.error('Error fetching all posts:', error);
      }
    };
    fetchOnePost();
  }, [id]);

  console.log(onePost);
  return (
    <div className="post-page">
      <div className="post-page__wrapper">
        <Post onePost={onePost}/>
        <Comments />
      </div>
    </div>
  );
};
