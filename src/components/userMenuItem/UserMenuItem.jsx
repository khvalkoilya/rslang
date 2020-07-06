import React from 'react';
import PropTypes from 'prop-types';

import USER_MENU_ITEMS from '../../Variables/userMenuItems';

const UserMenuItem = ({ isAuth }) => {
  const menuItems = USER_MENU_ITEMS.map((e) => {
    if (e.isAuthorized === isAuth) {
      return (
        <button key={e.id} className="profile-menu__button" type="button">
          {e.name}
        </button>
      );
    }
    return null;
  });

  return (
    <div className="profile-menu__list">
      {menuItems}
    </div>
  );
};

UserMenuItem.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

export default UserMenuItem;
