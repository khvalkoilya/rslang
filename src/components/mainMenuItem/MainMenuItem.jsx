import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const MainMenuItem = ({
  name, isUnderlined, id, isAuthorized, setPage, isAuth,
}) => (
  <button
    type="button"
    onClick={isAuth ? useCallback(() => {
      setPage(id);
    }, []) : null}
    className={`menu-item ${isUnderlined ? 'menu-item-active' : ''} ${!isAuth && !isAuthorized ? 'menu-item-lock' : ''}`}
  >
    { name }
  </button>
);

MainMenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  isUnderlined: PropTypes.bool,
  id: PropTypes.number,
  isAuthorized: PropTypes.bool,
  setPage: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
};

MainMenuItem.defaultProps = {
  isUnderlined: false,
  id: 0,
  isAuthorized: false,
};

export default MainMenuItem;
