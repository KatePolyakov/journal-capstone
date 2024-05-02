import React from 'react';

import axios from '../../axios';

export const ProfilePage = () => {
  try {
    axios
      .get('/auth/me')
      .then((res) => {
        console.log('profile', res.data);
      })
      .catch((e) => {
        alert('wrong details');
        console.log(e);
      });
  } catch (e) {
    console.log(e);
  }

  return <>profile Page</>;
};
