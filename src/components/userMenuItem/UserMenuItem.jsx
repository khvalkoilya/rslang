import React from 'react';
import PropTypes from 'prop-types';
import USER_MENU_ITEMS from '../../variables/userMenuItems';

const UserMenuItem = ({ isAuth }) => {
  const menuItems = USER_MENU_ITEMS.map((e) => {
    if (e.isAuthorized === isAuth) {
      return (
        <button key={e.id} className="profile-menu__button" type="button">
          <img src={e.icon} alt="icon" style={e.styles} />
          <span>{e.name}</span>
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
