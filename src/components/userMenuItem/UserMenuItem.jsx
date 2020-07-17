import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ApplicationData from '../context/Context';
import { USER_MENU_ITEMS } from '../../variables/MenuVariables';
import DEFAULT_WORDS from '../../variables/defaultWords';
import DEFAULT_SETTINGS from '../../variables/defaultSettings';

const UserMenuItem = ({
  isAuth, setVisible, isNavVisible, burgerState,
}) => {
  const {
    page, setPage, setIsAuth, setSettings, setWords, setUser, doneCards,
  } = useContext(ApplicationData);
  const menuItems = USER_MENU_ITEMS.map((element) => {
    if (element.isAuthorized === isAuth) {
      return (
        <button
          key={element.id}
          onClick={() => {
            if (element.title === 'logOut') {
              setIsAuth(false);
              setVisible(false);
              setWords(DEFAULT_WORDS);
              setSettings(DEFAULT_SETTINGS);
              localStorage.clear();
              localStorage.setItem('doneCards', JSON.stringify(doneCards));
              setUser();
              localStorage.setItem('isAuthLocal', JSON.stringify(false));
              setPage('signIn');
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
