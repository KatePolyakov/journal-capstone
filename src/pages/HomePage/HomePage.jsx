import React, { useEffect, useState } from 'react';
import axios from '../../axios';

import { PostCard } from '../../components/PostCard/PostCard';
import './HomePage.scss';

export const HomePage = () => {
  const [getAllposts, setGetAllPosts] = useState();

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const response = await axios.get(`/posts`);
        setGetAllPosts(response.data);
      } catch (error) {
        console.error('Error fetching all posts:', error);
      }
    };
    fetchAllPosts();
  }, []);

  return (
    <div className="home-page">
      <div className="home-page__wrapper">
        <PostCard getAllposts={getAllposts} />
      </div>
    </div>
  );
};
