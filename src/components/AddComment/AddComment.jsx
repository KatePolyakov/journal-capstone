import React from 'react';

import AddIcon from '../../assets/icons/add_comment.svg';
import './AddComment.scss';

export const AddComment = () => {
  return (
    <div className="add-comment">
      <form className="add-comment__form" id="add-comment__form">
        <div className="add-comment__form-input">
          <textarea
            className="add-comment__form-text"
            type="text"
            name="comment"
            id="commentAdd"
            placeholder="Add a new comment"></textarea>
        </div>
        <button type="submit" className="add-comment__form-button">
          <img src={AddIcon} alt="add__comment" />
          <p>COMMENT</p>
        </button>
      </form>
    </div>
  );
};
