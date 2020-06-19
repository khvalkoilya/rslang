import React from 'react';

import './ProfileMenuItem.scss';
import profileMenuItems from '../../Variables/ProfileMenuItems';

const ProfileMenuItem = () => {
  const isAuthorized = false;

  const needMenuItems = [];

  for (let i = 0; i < profileMenuItems.length; i += 1) {
    if (profileMenuItems[i].isAuthorized === isAuthorized) {
      needMenuItems.push(profileMenuItems[i]);
    }
  }

  return (
    <div className="profile-menu__list">
      {needMenuItems.map((item) => <button className="profile-menu__button" type="button">{item.name}</button>)}
    </div>
  );
};

export default ProfileMenuItem;
