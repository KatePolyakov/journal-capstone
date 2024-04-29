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
            Integer quis auctor elit sed vulputate. Sed viverra tellus in hac habitasse platea.
            Viverra mauris in aliquam sem fringilla ut morbi. Nulla facilisi etiam dignissim diam
            quis enim lobortis. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Congue
            mauris rhoncus aenean vel. Venenatis urna cursus eget nunc. Sed ullamcorper morbi
            tincidunt ornare massa. Pulvinar etiam non quam lacus suspendisse. Feugiat scelerisque
            varius morbi enim nunc. Dignissim cras tincidunt lobortis feugiat vivamus at augue.
            Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Nec dui nunc
            mattis enim ut. Dignissim sodales ut eu sem. Ut placerat orci nulla pellentesque. Mollis
            nunc sed id semper risus in. Aenean pharetra magna ac placerat vestibulum lectus mauris
            ultrices eros.
          </p>
        </div>
      </div>
    </div>
  );
};
