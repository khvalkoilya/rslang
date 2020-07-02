import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { MainMenuPagesContext, UserMenuPagesContext } from '../context/Context';
import USER_MENU_ITEMS from '../../variables/userMenuItems';

const UserMenuItem = ({ isAuth, isNavVisible }) => {
  const setPage = useContext(MainMenuPagesContext);
  const currentPage = useContext(UserMenuPagesContext);
  const menuItems = USER_MENU_ITEMS.map((e) => {
    if (e.isAuthorized === isAuth) {
      return (
        <button
          key={e.id}
          onClick={() => {
            setPage(e.props);
            isNavVisible();
          }}
          className="profile-menu__button"
          type="button"
        >
          <img src={e.icon} alt="icon" style={e.styles} />
          <span className={currentPage === e.props ? 'active' : ''}>{e.name}</span>
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
  isNavVisible: PropTypes.func.isRequired,
};

export default UserMenuItem;
