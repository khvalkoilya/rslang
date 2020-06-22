import React from 'react';
import PropTypes from 'prop-types';

import USER_MENU_ITEMS from '../../variables/userMenuItems';

const UserMenuItem = ({ isAuth }) => {
  const needMenuItems = [];

  for (let i = 0; i < USER_MENU_ITEMS.length; i += 1) {
    if (USER_MENU_ITEMS[i].isAuthorized === isAuth) {
      needMenuItems.push(USER_MENU_ITEMS[i]);
    }
  }

  return (
    <div className="profile-menu__list">
      {needMenuItems.map((item) => <button className="profile-menu__button" type="button">{item.name}</button>)}
    </div>
  );
};

UserMenuItem.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

export default UserMenuItem;
