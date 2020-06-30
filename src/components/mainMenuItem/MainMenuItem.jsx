import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import Props from '../context/Context';

const MainMenuItem = ({
  name, isUnderlined, id, isAuthorized, setPages, isAuth, props, icon, lock,
}) => {
  const setPage = useContext(Props);
  return (
    <button
      type="button"
      onClick={isAuth ? useCallback(() => {
        setPages(id);
        setPage(props);
      }, []) : null}
      className={`menu-item ${isUnderlined ? 'menu-item-active' : ''} ${!isAuth && !isAuthorized ? 'menu-item-lock' : ''}`}
    >
      <img src={icon} alt="icon" className="menu-item-icon" />
      { name }
      { !isAuth && lock ? <img src={lock} alt="lock" className="lock" /> : null }
    </button>
  );
};

MainMenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  isUnderlined: PropTypes.bool,
  id: PropTypes.number,
  isAuthorized: PropTypes.bool,
  setPages: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
  lock: PropTypes.string,
  icon: PropTypes.string.isRequired,
  props: PropTypes.string.isRequired,
};

MainMenuItem.defaultProps = {
  isUnderlined: false,
  id: 0,
  isAuthorized: false,
  lock: '',
};

export default MainMenuItem;
