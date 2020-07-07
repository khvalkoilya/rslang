import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { MainMenuPagesContext, UserMenuPagesContext } from '../context/Context';

const MainMenuItem = ({
  name, isAuthorized, isAuth, isNavVisible, props, icon, lock, burgerState,
}) => {
  const setPage = useContext(MainMenuPagesContext);
  const currentPage = useContext(UserMenuPagesContext);
  return (
    <button
      type="button"
      onClick={isAuthorized || isAuth ? (() => {
        setPage(props);
        if (document.body.offsetWidth <= 600) {
          isNavVisible();
          burgerState();
        }
      }) : undefined}
      className={`menu-item ${props === currentPage ? 'menu-item-active' : ''} ${!isAuth && !isAuthorized ? 'menu-item-lock' : ''}`}
    >
      <img src={icon} alt="icon" className="menu-item-icon" />
      { name }
      { !isAuth && lock && <img src={lock} alt="lock" className="lock" /> }
    </button>
  );
};

MainMenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  isAuthorized: PropTypes.bool,
  isAuth: PropTypes.bool.isRequired,
  isNavVisible: PropTypes.func.isRequired,
  lock: PropTypes.string,
  icon: PropTypes.string.isRequired,
  props: PropTypes.string.isRequired,
  burgerState: PropTypes.func.isRequired,
};

MainMenuItem.defaultProps = {
  isAuthorized: false,
  lock: '',
};

export default MainMenuItem;
