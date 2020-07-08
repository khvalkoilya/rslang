import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ChangePage from '../context/Context';
import { USER_MENU_ITEMS } from '../../variables/MenuVariables';

const UserMenuItem = ({
  isAuth, setVisible, isNavVisible, burgerState,
}) => {
  const { page, setPage, setIsAuth } = useContext(ChangePage);
  const menuItems = USER_MENU_ITEMS.map((element) => {
    if (element.isAuthorized === isAuth) {
      return (
        <button
          key={element.id}
          onClick={() => {
            if (element.title === 'logOut') {
              setIsAuth(false);
              setVisible(false);
              setPage('train');
            } else {
              setPage(element.title);
              if (document.body.offsetWidth <= 600) {
                isNavVisible();
                burgerState();
              }
            }
          }}
          className="profile-menu__button"
          type="button"
        >
          <img src={element.icon} alt="icon" style={element.styles} />
          <span className={page === element.title ? 'active' : ''}>{element.name}</span>
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
  setVisible: PropTypes.func.isRequired,
  isNavVisible: PropTypes.func.isRequired,
  burgerState: PropTypes.func.isRequired,
};

export default UserMenuItem;
