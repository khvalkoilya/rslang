import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { MainMenuPagesContext, UserMenuPagesContext } from '../context/Context';

const MainMenuItem = ({
  name, isAuthorized, isAuth, props, icon, lock,
}) => {
  const setPage = useContext(MainMenuPagesContext);
  const currentPage = useContext(UserMenuPagesContext);
  return (
    <button
      type="button"
      onClick={isAuthorized || isAuth ? (() => {
        setPage(props);
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
  lock: PropTypes.string,
  icon: PropTypes.string.isRequired,
  props: PropTypes.string.isRequired,
};

MainMenuItem.defaultProps = {
  isAuthorized: false,
  lock: '',
};

export default MainMenuItem;
