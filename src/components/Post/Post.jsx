import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';


import { fetchRemovePost } from '../../redux/slices/posts';

import { UserInfo } from '../UserInfo/UserInfo';

import EditIcon from '../../assets/icons/edit_icon.svg';
import DeleteIcon from '../../assets/icons/delete_icon.svg';
import EyeIcon from '../../assets/icons/eye_icon.svg';
import CommentIcon from '../../assets/icons/twitch_icon.svg';

import './Post.scss';

export const Post = ({
  id,
  title,
  createdAt,
  imageUrl,
  user,
  viewsCount,
  commentsCount,
  tags,
  children,
  isFullPost,
  isLoading,
  isEditable,
}) => {
  const dispatch = useDispatch();
  if (isLoading) {
    return <div>Loading</div>;
  }

  const onClickRemove = () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      dispatch(fetchRemovePost(id));
    }
  };

  return (
    <div className="post-card">
      <div className="post-card__wrapper">
        <div className="post-card__header">
          <UserInfo {...user} additionalText={createdAt} />
          {isEditable && (
            <div className="post-card__buttons">
              <Link to={`/posts/${id}/edit`}>
                <img src={EditIcon} alt="edit" className="post-card__buttons-edit" />
              </Link>
              <button onClick={onClickRemove} color="secondary">
                <img src={DeleteIcon} alt="delete" className="post-card__buttons-delete" />
              </button>
            </div>
          )}
        </div>
        <div className="post-card__main">
          {imageUrl && <img className="post-card__main-img" src={imageUrl} alt={title} />}

          <h2 className="post-card__title">
            {isFullPost ? title : <Link to={`/posts/${id}`}>{title}</Link>}
          </h2>
          <ul className="post-card__tags">
            {tags.map((name) => (
              <li key={name}>
                <Link to={`/tag/${name}`}>#{name}</Link>
              </li>
            ))}
          </ul>
          {children && <div>{children}</div>}
          <ul className="post-card__icons">
            <li>
              <img src={EyeIcon} alt="eye" />
              <span>{viewsCount}</span>
            </li>
            <li>
              <img src={CommentIcon} alt="comment" />
              <span>{commentsCount}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
