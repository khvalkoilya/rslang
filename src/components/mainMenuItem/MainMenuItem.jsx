import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const MainMenuItem = ({
  name, isUnderlined, id, isAuthorized, setPage, isAuth, lock, icon,
}) => (
  <button
    type="button"
    onClick={isAuth ? useCallback(() => {
      setPage(id);
    }, []) : null}
    className={`menu-item ${isUnderlined ? 'menu-item-active' : ''} ${!isAuth && !isAuthorized ? 'menu-item-lock' : ''}`}
  >
    <img src={icon} alt="icon" className="menu-item-icon" />
    { name }
    { !isAuth && lock ? <img src={lock} alt="lock" className="lock" /> : null }
  </button>
);

MainMenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  isUnderlined: PropTypes.bool,
  id: PropTypes.number,
  isAuthorized: PropTypes.bool,
  setPage: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
  lock: PropTypes.string,
  icon: PropTypes.string.isRequired,
};

MainMenuItem.defaultProps = {
  isUnderlined: false,
  id: 0,
  isAuthorized: false,
  lock: '',
};

export default MainMenuItem;
