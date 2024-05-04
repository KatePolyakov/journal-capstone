import React from 'react';

import { dynamicTimestamp } from '../../utils/dynamicTimestamp';

import './UserInfo.scss';

export const UserInfo = ({ avatarUrl, fullName, additionalText }) => {
  return (
    <div className="user-info__header">
      <img className="user-info__profile-img" src={avatarUrl || '/noavatar.png'} alt={fullName} />
      <div className="user-info__name-group">
        <span className="user-info__name">{fullName}</span>
        <span className="user-info__date">{dynamicTimestamp(additionalText)}</span>
      </div>
    </div>
  );
};
